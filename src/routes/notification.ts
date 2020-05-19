import { Router } from 'express';
// const { check } = require('express-validator');
import { new_subscription } from '../controllers/notification';
import { param } from "express-validator";

export const notificationRouter = Router();

notificationRouter.post(
    '/subscribe/:pharmacyId',
    [
        param('pharmacyId')
            .trim()
            .escape()
            .isLength({ min: 1 }),
    ],
    new_subscription,
);
