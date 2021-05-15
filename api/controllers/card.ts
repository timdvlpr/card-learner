import * as express from 'express';
import {Card} from '../models/Card';
import {ErrorResponse} from '../utils/errorResponse';

const dbquery = require('../utils/dbquery');

/**
 * @desc        Get all cards in stack
 * @route       GET /api/card/all/:stackID
 * @access      Public
 */
exports.getAllCardsInStack = async function(req: express.Request, res: express.Response, next) {
    const stackID = req.params.stackID;
    const query = 'SELECT * FROM cards WHERE inStack = ?;';

    try {
        const dbdata = await dbquery(query, [stackID]);
        if (dbdata.length === 0) {
            return next(new ErrorResponse(404, 'Keine Karten in diesem Stapel vorhanden'));
        }
        res.status(200).json({
            success: true,
            data: dbdata
        });
    } catch (e) {
        next(new ErrorResponse(500, e.message));
    }
}

/**
 * @desc        Get single card
 * @route       GET /api/card/:id
 * @access      Public
 */
exports.getCard = async function(req: express.Request, res: express.Response, next) {
    const cardID = req.params.id;
    const query = 'SELECT * FROM cards WHERE id = ?;';

    try {
        const dbdata = await dbquery(query, [cardID]);
        if (dbdata.length !== 1) {
            return next(new ErrorResponse(404, 'Karte nicht gefunden'));
        }
        const card = new Card(dbdata[0].id, dbdata[0].question, dbdata[0].answer, dbdata[0].inStack);
        res.status(200).json({
            success: true,
            card
        });
    } catch (e) {
        next(new ErrorResponse(500, e.message));
    }
}

/**
 * @desc        Create new card
 * @route       POST /api/card
 * @access      Public
 */
exports.createCard = async function(req: express.Request, res: express.Response, next) {
    const question = req.body.question;
    const answer = req.body.answer;
    const inStack = req.body.inStack;
    const query = 'INSERT INTO cards (question, answer, inStack) VALUES (?, ?, ?);';

    try {
        await dbquery(query, [question, answer, inStack]);
        res.status(201).json({
            success: true,
            msg: 'Karte erfolgreich erstellt'
        });
    } catch (e) {
        return next(new ErrorResponse(500, e.message));
    }
}

/**
 * @desc        Update card
 * @route       PUT /api/card/:id
 * @access      Public
 */
exports.updateCard = async function(req: express.Request, res: express.Response, next) {
    const cardID = req.params.id;
    const question = req.body.question;
    const answer = req.body.answer;
    const inStack = req.body.inStack;
    const query = 'UPDATE cards SET question = ?, answer = ?, inStack = ? WHERE id = ?;';

    try {
        const dbdata = await dbquery(query, [question, answer, inStack, cardID]);
        if (dbdata.affectedRows !== 1) {
            return next(new ErrorResponse(404, 'Karte nicht gefunden'));
        }
        res.status(200).json({
            success: true,
            message: 'Karte erfolgreich bearbeitet'
        });
    } catch (e) {
        next(new ErrorResponse(500, e.message));
    }
}

/**
 * @desc        Delete card
 * @route       DELETE /api/card/:id
 * @access      Public
 */
exports.deleteCard = async function(req: express.Request, res: express.Response, next) {
    const cardID = req.params.id;
    const query = 'DELETE FROM cards WHERE id = ?;';

    try {
        const dbdata = await dbquery(query, [cardID]);
        if (dbdata.affectedRows !== 1) {
            return next(new ErrorResponse(404, 'Karte nicht gefunden'));
        }
        res.status(200).json({
            success: true,
            msg: 'Karte erfolgreich gelöscht'
        });
    } catch (e) {
        next(new ErrorResponse(500, e.message));
    }
}
