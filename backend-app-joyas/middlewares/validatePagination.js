export const validatePagination = ( req, res, next ) => {

    const { page, limits } = req.query;
    
    const isPosInt = /^[1-9]\d*$/;

    if ( page && !isPosInt.test( page ) ) {
        const error = new Error('Invalid page number, number > 0');
        error.status = 400;

        return next(error);
    };

    if ( limits && !isPosInt.test( limits ) ) {
        const error = new Error('Invalid limits number, number > 0');
        error.status = 400;

        return next(error);
    };

    next();
};