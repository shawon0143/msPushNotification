import { Request, Response } from 'express';
const { validationResult } = require('express-validator');
let subscriptions: { [index: string]: any } = {};

// import * as crypto from "crypto";
//
// function createHash(input) {
//     const md5sum = crypto.createHash("md5");
//     md5sum.update(Buffer.from(input));
//     return md5sum.digest("hex");
// }

export const new_subscription = (req: any, res: Response, next) => {
    console.log(subscriptions);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('there is error');
        console.log(errors);
        res.status(500).json({ message: 'Subscription failed' });
    } else {
        const token = req.body.token;
        const pharmacyId = parseInt(req.body.pharmacyId, 10);
        let savedTokenArray = subscriptions[pharmacyId];
        if (savedTokenArray) {
            let updatedTokenList: any = [...savedTokenArray, token];
            subscriptions[pharmacyId] = [...new Set(updatedTokenList)];
        } else {
            subscriptions[pharmacyId] = [token];
        }
        res.status(201).json({ message: 'Subscribed for push notification.' });
    }

    res.end();
};

export const getMyToken = (pharmacyId: number) => {
    return subscriptions[pharmacyId];
};
