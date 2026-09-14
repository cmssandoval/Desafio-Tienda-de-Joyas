export const validateQueryParams = ( field, direction ) => {

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
        fieldList.includes(field.toLowerCase())
        ? field?.toLowerCase()
        : "id";

    const safeDirection =
        directionList.includes(direction.toUpperCase())
        ? direction.toUpperCase()
        : "ASC";

    return { safeField, safeDirection };

};