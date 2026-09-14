import { logger } from '../utils/logger.js';

export const notFound = async (req, res, next) => {

    logger.warn('Route not found', {

        url: req.originalUrl,
        method: req.method,
        ip: req.ip,
        userAgent: req.get('User-Agent'),

    });

    res.status(404).send('Not found, try another route');
    
};