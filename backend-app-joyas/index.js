import express from 'express';
import 'dotenv/config';

import cors from 'cors';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';

import joyasRoute from './routes/joyas.route.js';

const app = express();
app.use(cors());

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const BASE_URL = `http://localhost:${SERVER_PORT}`;

app.listen(SERVER_PORT, () => {
    console.log(`Server is on at ${BASE_URL}`);
});

//* During the development, the frontend index requested this resource
//* without previous configuration, so this will be a temporary
//* preventive route to handle it.
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.get('/', ( req, res ) => {
    res.status(200).send('Hello world from the home route!');
});

app.use('/joyas', joyasRoute);

app.use(notFound);
app.use(errorHandler);