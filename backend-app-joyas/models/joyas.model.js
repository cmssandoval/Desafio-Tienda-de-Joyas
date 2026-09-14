import format from 'pg-format';
import { pool } from '../database/connection.js';
import 'dotenv/config'

import { validateQueryParams } from '../utils/query.utils.js';
import { buildJoyasHATEOAS } from '../utils/hateoas.utils.js';
import { BASE_URL } from '../utils/baseUrl.utils.js';

const getTotalPages = async ( limit ) => {
    try {
        
        const countQuery = 'SELECT COUNT(*) FROM inventario';
        const { rows: countResult } = await pool.query( countQuery );
        const total_rows = parseInt( countResult[0].count, 10 );
        const total_pages = Math.ceil( total_rows / limit );
        return { total_pages };
        
    } catch (error) {
        
        throw error;
        
    }
};

const getAllJoyas = async ({ limit = 5, page = 1, order_by = "id_ASC" }) => {
    
    try {
        const query =
        `SELECT * FROM inventario
        ORDER BY %s %s
        LIMIT %s
        OFFSET %s
        `;

        const [ field, direction ] = order_by.split( "_" );
        const { safeField, safeDirection } = validateQueryParams( field, direction );

        const offset = ( page - 1 ) * limit;

        const formattedQuery = format(
            query,
            safeField,
            safeDirection,
            limit,
            offset
        );

        const { rows: joyas } = await pool.query( formattedQuery );

        const { total_pages } = await getTotalPages( limit );

        const HATEOAS = buildJoyasHATEOAS({ joyas, total_pages, limit, page, order_by });
        return HATEOAS;

    } catch (error) {

        throw error;
    }

};

const getJoyasFiltered = async ({ precio_max, precio_min, categoria, metal }) => {
    try {
        
        let filters = [];
        let values = [];

        const addFilter = ( field, operator, value ) => {
            values.push( value );
            const { length } = filters;
            filters.push(`${ field } ${ operator } $${ length + 1 }`)
        };

        if ( precio_max )   addFilter( 'precio', '<=', precio_max );
        if ( precio_min )   addFilter( 'precio', '>=', precio_min );
        if ( categoria )    addFilter( 'categoria', '=', categoria );
        if ( metal )        addFilter( 'metal', '=', metal );

        let query = 'SELECT * FROM inventario';

        if ( filters.length > 0 ) {
            filters = filters.join(' AND ');
            query += ` WHERE ${ filters }`;
        }

        const { rows: joyasFiltered } = await pool.query( query, values )
        return joyasFiltered ;

    } catch (error) {

        throw error;

    }
};

const getJoyaById = async ( joyaId ) => {

    try {

        const query = 'SELECT * FROM inventario WHERE id = $1';
        const values = [ joyaId ];
        const { rows: result } = await pool.query( query, values );
        return {
            all: `${ BASE_URL }/joyas?limit=5&page=1&order_by=id_ASC`,
            result: result[0],
        };

    } catch (error) {

        throw error;

    }

};

const replaceJoyaById = async ( id ) => {

    try {

        throw new Error(`Not implemented!`);

        // const query = 'SELECT * FROM inventario WHERE';
        // const { rows: result } = await pool.query(query);
        return result;

    } catch (error) {

        throw error;

    }

};

const updateJoyaById = async ( id ) => {

    try {

        throw new Error(`Not implemented!`);

        // const query = 'SELECT * FROM inventario WHERE';
        // const { rows: result } = await pool.query(query);
        return result;

    } catch (error) {

        throw error;

    }

};

const removeJoyaById = async ( id ) => {

    try {
        
        throw new Error(`Not implemented!`);

        // const query = 'SELECT * FROM inventario WHERE';
        // const { rows: result } = await pool.query(query);
        return result;

    } catch (error) {

        throw error;

    }

};

export const joyasModel = {

    getAllJoyas,
    getJoyasFiltered,
    getJoyaById,
    replaceJoyaById,
    updateJoyaById,
    removeJoyaById,

};