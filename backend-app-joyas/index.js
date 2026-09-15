import express from 'express';
import 'dotenv/config';

import cors from 'cors';
import { notFound } from './middlewares/notFound.js';

import joyasRoute from './routes/joyas.route.js';

const app = express();
app.use(cors());

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const BASE_URL = `http://localhost:${SERVER_PORT}`;

app.listen(SERVER_PORT, () => {
    console.log(`Server is on at ${BASE_URL}`);
});

app.get('/', ( req, res ) => {
    res.status(200).send('Hello world from the home route!');
});

app.use('/joyas', joyasRoute);

app.use(notFound);

//! Create sql injection detection middleware
//! Create route access middleware
//! Create data access middleware