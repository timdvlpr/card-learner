import {check, validationResult} from 'express-validator';
import {ErrorResponse} from "../utils/errorResponse";

exports.validateCard = [
    check('question')
        .trim()
        .escape()
        .notEmpty()
        .withMessage('Fragefeld darf nicht leer sein'),
    check('answer')
        .trim()
        .escape()
        .notEmpty()
        .withMessage('Antwortfeld darf nicht leer sein'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessage = errors.array({ onlyFirstError: true })[0].msg;
            return next(new ErrorResponse(400, errorMessage));
        }
        next();
    },
];
