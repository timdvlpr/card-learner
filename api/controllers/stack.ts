import * as express from 'express';
import {Stack} from '../models/Stack';
import {ErrorResponse} from '../utils/errorResponse';

const slugify = require('slugify');
const dbquery = require('../utils/dbquery');


/**
 * @desc        Get all stacks
 * @route       GET /api/stack/all
 * @access      Public
 */
exports.getAllStacks = async function(req: express.Request, res: express.Response, next) {
    const query = 'SELECT * FROM stacks';
    try {
        const dbdata = await dbquery(query, []);
        if (dbdata.length === 0) {
            return next(new ErrorResponse(404, 'Keine Stapel vorhanden'));
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
 * @desc        Get all stacks in group
 * @route       GET /api/stack/all/:groupID
 * @access      Public
 */
exports.getAllStacksInGroup = async function(req: express.Request, res: express.Response, next) {
    const groupID = req.params.groupID;
    const query = 'SELECT * FROM stacks WHERE inGroup = ?;';
    try {
        const dbdata = await dbquery(query, [groupID]);
        if (dbdata.length === 0) {
            return next(new ErrorResponse(404, 'Keine Stapel in dieser Gruppe vorhanden'));
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
 * @desc        Get single stack
 * @route       GET /api/stack/:slug
 * @access      Public
 */
exports.getStack = async function(req: express.Request, res: express.Response, next) {
    const slug = req.params.slug;
    const query = 'SELECT * FROM stacks WHERE slug = ?;';

    try {
        const dbdata = await dbquery(query, [slug]);
        if (dbdata.length !== 1) {
            return next(new ErrorResponse(404, 'Stapel nicht gefunden'));
        }
        const stack = new Stack(dbdata[0].id, dbdata[0].name, dbdata[0].slug, dbdata[0].inGroup)
        res.status(200).json({
            success: true,
            stack
        });
    } catch (e) {
        next(new ErrorResponse(500, e.message));
    }
}

/**
 * @desc        Create new stack
 * @route       POST /api/stack
 * @access      Public
 */
exports.createStack = async function(req: express.Request, res: express.Response, next) {
    const name = req.body.name;
    const inGroup = req.body.inGroup;
    const slug = slugify(name);
    const query = 'INSERT INTO stacks (name, slug, inGroup) VALUES (?, ?, ?);';

    try {
        await dbquery(query, [name, slug, inGroup]);
        res.status(201).json({
            success: true,
            msg: 'Stapel erfolgreich erstellt'
        });
    } catch (e) {
        return next(new ErrorResponse(500, e.message));
    }
}

/**
 * @desc        Update stacks
 * @route       PUT /api/stack/:id
 * @access      Public
 */
exports.updateStack = async function(req: express.Request, res: express.Response, next) {
    const stackID = req.params.id;
    const name = req.body.name;
    const inGroup = req.body.inGroup;
    const slug = slugify(name);
    const query = 'UPDATE stacks SET name = ?, slug = ?, inGroup = ? WHERE id = ?;';

    try {
        const dbdata = await dbquery(query, [name, slug, inGroup, stackID]);
        if (dbdata.affectedRows !== 1) {
            return next(new ErrorResponse(404, 'Stapel nicht gefunden'));
        }
        res.status(200).json({
            success: true,
            message: 'Stapel erfolgreich bearbeitet'
        });
    } catch (e) {
        next(new ErrorResponse(500, e.message));
    }
}

/**
 * @desc        Delete stack
 * @route       DELETE /api/stack/:id
 * @access      Public
 */
exports.deleteStack = async function(req: express.Request, res: express.Response, next) {
    const stackID = req.params.id;
    const query = 'DELETE FROM stacks WHERE id = ?;';

    try {
        const dbdata = await dbquery(query, [stackID]);
        if (dbdata.affectedRows !== 1) {
            return next(new ErrorResponse(404, 'Stapel nicht gefunden'));
        }
        res.status(200).json({
            success: true,
            msg: 'Stapel erfolgreich gelöscht'
        });
    } catch (e) {
        next(new ErrorResponse(500, e.message));
    }
}
