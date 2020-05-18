import { Router } from 'express';
const { check } = require('express-validator');
import { new_subscription } from '../controllers/notification';

export const notificationRouter = Router();

notificationRouter.post(
    '/',
    [
        check('token')
            .trim()
            .escape()
            .isLength({ min: 1 }),
        check('pharmacyId')
            .trim()
            .escape()
            .isLength({ min: 1 }),
    ],
    new_subscription,
);
