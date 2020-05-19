import { Request, Response } from 'express';
const { validationResult } = require('express-validator');
import * as webpush from 'web-push';

let subscriptions: { [index: string]: any } = {};

export const new_subscription = (req: Request, res: Response, next) => {
    // console.log(subscriptions);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('there is error');
        console.log(errors);
        res.status(500).json({ message: 'Subscription failed' });
    } else {
        const token = req.body;
        const pharmacyId = parseInt(req.params.pharmacyId, 10);
        let savedTokenArray = subscriptions[pharmacyId];
        if (savedTokenArray) {
            let isTokenAlreadyCached = savedTokenArray.find((item: any) => item.endpoint === token.endpoint);
            if (!isTokenAlreadyCached) {
                let updatedTokenList: any = [...savedTokenArray, token];
                subscriptions[pharmacyId] = [...new Set(updatedTokenList)];
            }
        } else {
            subscriptions[pharmacyId] = [token];
        }
        res.status(201).json({ message: 'Subscribed for push notification.' });
    }

    res.end();
};

export const sendPushNotification = async (pharmacyId: number, orderId: number) => {
    const subscriptionId = pharmacyId;
    const pushSubscriptions = subscriptions[subscriptionId];
    for (const subscription of pushSubscriptions) {
        await webpush
            .sendNotification(
                subscription,
                JSON.stringify({
                    title: "Neue Vorbestellung",
                    text: "HEY! Take a look at this order!",
                    image: "/images/icon.png",
                    tag: "new-order",
                    url: "http://localhost:3000/#/dashboard",
                    orderId: orderId
                })
            )
            .catch(err => {
                console.log(err);
            });
    }
};
