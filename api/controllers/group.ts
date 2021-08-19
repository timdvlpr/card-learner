import * as express from 'express';
import {Group} from '../models/Group';
import {ErrorResponse} from '../utils/errorResponse';

const slugify = require('slugify');
const dbquery = require('../utils/dbquery');


/**
 * @desc        Get all groups
 * @route       GET /api/group/all
 * @access      Public
 */
exports.getAllGroups = async function(req: express.Request, res: express.Response, next) {
    const query = 'SELECT * FROM groups';
    try {
        const dbdata = await dbquery(query, []);
        if (dbdata.length === 0) {
            return next(new ErrorResponse(404, 'Keine Gruppen vorhanden'));
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
 * @desc        Get single group
 * @route       GET /api/group/:slug
 * @access      Public
 */
exports.getGroup = async function (req: express.Request, res: express.Response, next) {
    const slug = req.params.slug;
    const query = 'SELECT * FROM groups WHERE slug = ?;';

    try {
        const dbdata = await dbquery(query, [slug]);
        if (dbdata.length !== 1) {
            return next(new ErrorResponse(404, 'Gruppe nicht gefunden'));
        }
        const group = new Group(dbdata[0].id, dbdata[0].name, dbdata[0].slug);
        res.status(200).json({
            success: true,
            group
        });
    } catch (e) {
        next(new ErrorResponse(500, e.message));
    }
}

/**
 * @desc        Create new group
 * @route       POST /api/group
 * @access      Public
 */
exports.createGroup = async function (req: express.Request, res: express.Response, next) {
    const name = req.body.name;
    const slug = slugify(name);
    const query = 'INSERT INTO groups (name, slug) VALUES (?, ?);';

    try {
        const dbdata = await dbquery(query, [name, slug]);
        const group = new Group(dbdata.insertId, name, slug);
        res.status(201).json({
            success: true,
            msg: 'Gruppe erfolgreich erstellt',
            group
        });
    } catch (e) {
        return next(new ErrorResponse(500, e.message));
    }
}

/**
 * @desc        Update group
 * @route       PUT /api/group/:id
 * @access      Public
 */
exports.updateGroup = async function (req: express.Request, res: express.Response, next) {
    const groupID = req.params.id;
    const name = req.body.name;
    const slug = slugify(name);
    const query = 'UPDATE groups SET name = ?, slug = ? WHERE id = ?;';

    try {
        const dbdata = await dbquery(query, [name, slug, groupID]);
        if (dbdata.affectedRows !== 1) {
            return next(new ErrorResponse(404, 'Gruppe nicht gefunden'));
        }
        const group = new Group(Number(groupID), name, slug);
        res.status(200).json({
            success: true,
            message: 'Gruppe erfolgreich bearbeitet',
            group
        });
    } catch (e) {
        next(new ErrorResponse(500, e.message));
    }
}

/**
 * @desc        Delete group
 * @route       DELETE /api/group/:id
 * @access      Public
 */
exports.deleteGroup = async function (req: express.Request, res: express.Response, next) {
    const groupID = req.params.id;
    const query = 'DELETE FROM groups WHERE id = ?;';

    try {
        const dbdata = await dbquery(query, [groupID]);
        if (dbdata.affectedRows !== 1) {
            return next(new ErrorResponse(404, 'Gruppe nicht gefunden'));
        }
        res.status(200).json({
            success: true,
            msg: 'Gruppe erfolgreich gelöscht'
        });
    } catch (e) {
        next(new ErrorResponse(500, e.message));
    }
}
