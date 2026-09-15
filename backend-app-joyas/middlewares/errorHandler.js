import { getDatabaseError } from "../libs/errors/database.error.js";

export const errorHandler = ( err, req, res, next ) => {
    console.log( err );
    
    if ( err.code ) {

        const { status, message } = getDatabaseError( err.code );
        return res.status( status ).json({ error: message });
    
    }

    const status = err.status || 500;
    const message = ( status === 500 )
        ? 'Internal Server Error'
        : err.message;

    return res.status( status ).json({ error: message });
};