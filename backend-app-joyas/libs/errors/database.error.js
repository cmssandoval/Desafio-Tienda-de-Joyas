const databaseError = {

    "22P02": {
        code: 400,
        message: "Invalid params value",
    },
    // NOT NULL restriction violation
    23502: {
        code: 400,
        message: "Bad Request",
    },
    // PK UNICITY restriction violation
    23505: {
        code: 400,
        message: "Bad Request",
    },

};
export const getDatabaseError = ( code ) => {
    return databaseError[code] || {
        code: 500, message: "Internal Server Error" };
};