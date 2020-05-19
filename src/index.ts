import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as webpush from 'web-push';
import * as compression from "compression";
import { notificationRouter } from "./routes";


// initializing socket connection
import connectionController from './controllers/connectionController';
connectionController.init(true, 'connection.dat');

// Create a new Express application.
const app = express();
const { PORT = 5000 } = process.env;

dotenv.config();

app.use(cors());
app.use(compression());

// Application-level middleware for common functionality( logging, parsing, and session handling).
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

webpush.setVapidDetails(
    process.env.WEB_PUSH_CONTACT,
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY,
);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET',
        );
        return res.status(200).json({});
    }
    next();
});

// Define Route
app.use('/notifications', notificationRouter);

app.get('/', (req, res) => {
    res.send('push notification service works!');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log('server started at http://localhost:' + PORT);
    });
}

export default app;
