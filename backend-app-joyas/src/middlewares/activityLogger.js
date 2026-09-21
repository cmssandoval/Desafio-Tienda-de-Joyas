import { reportActivity } from "../utils/activityReporter.utils.js";

export const logActivity = ( action, resource ) => {
    return ( req, res, next ) => {
        const start = Date.now();

        res.on('finish', () => {
            reportActivity({
                action,
                resource,
                method: req.method,
                queryParams: req.query,
                path: req.originalUrl,
                statusCode: res.statusCode,
                ip: req.ip,
                durationMs: ( Date.now() - start ),
                timestamp: new Date().toISOString(),
            });
        });

        next();
    };
};