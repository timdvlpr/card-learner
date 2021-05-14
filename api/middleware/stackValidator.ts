import {check, validationResult} from 'express-validator';
import {ErrorResponse} from "../utils/errorResponse";

exports.validateStack = [
    check('name')
        .trim()
        .escape()
        .notEmpty()
        .withMessage('Stapelname darf nicht leer sein')
        .bail()
        .isLength({max: 50})
        .withMessage('Stapelname zu lang: Maximal 50 Zeichen erlaubt'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessage = errors.array({ onlyFirstError: true })[0].msg;
            return next(new ErrorResponse(400, errorMessage));
        }
        next();
    },
];
