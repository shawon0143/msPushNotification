import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notificationRouter } from './routes/';

// initializing socket connection
import connectionController from './connectionController';
connectionController.init(true, 'connection.dat');

// Create a new Express application.
const app = express();
const { PORT = 5000 } = process.env;

// public folder for assets i.e (.js / .css/ images) files
app.use(express.static('src/public'));

// Application-level middleware for common functionality( logging, parsing, and session handling).
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
app.use('/notification', notificationRouter);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log('server started at http://localhost:' + PORT);
    });
}

export default app;
