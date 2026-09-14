import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const BASE_URL = `http://localhost:${SERVER_PORT}`;

app.listen(SERVER_PORT, () => {
    console.log(`Server is on at ${BASE_URL}`);
});

app.get('/', async ( req, res ) => {
    res.status(200).send('Hello world from the home route!');
});