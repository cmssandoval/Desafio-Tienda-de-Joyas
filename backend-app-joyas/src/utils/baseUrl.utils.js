import 'dotenv/config';

export const BASE_URL =
    process.env.NODE_ENV === "production"
        ? process.eventNames.DOMAIN_URL_APP
        : `http://localhost:${process.env.SERVER_PORT}`;