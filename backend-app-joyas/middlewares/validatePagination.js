const validateOrderParam = ( field, direction ) => {

    const fieldList = [
        "id",
        "nombre",
        "categoria",
        "metal",
        "precio",
        "stock"
    ];

    const directionList = [ "ASC", "DESC" ];

    const safeField =
        fieldList.includes( field?.toLowerCase() )
        ? field.toLowerCase()
        : undefined;

    const safeDirection =
        directionList.includes( direction?.toUpperCase() )
        ? direction.toUpperCase()
        : undefined;

    return { safeField, safeDirection };
};

export const validatePagination = ( req, res, next ) => {

    const { page, limits, order_by } = req.query;
    
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
    
    if ( order_by ) {
        const [ field, direction ] = order_by.split( "_" );
        const { safeField, safeDirection } = validateOrderParam( field, direction );

        if ( !safeField || !safeDirection ) {
            const error = new Error(
                `Bad Request. Invalid order_by query param statement.
                Use [ id | nombre | categoria | metal | precio | stock ]
                and [ ASC | DESC ] instead`
            );
            error.status = 400;

            return next(error);
        };
        
        return next();
    };

    next();
};