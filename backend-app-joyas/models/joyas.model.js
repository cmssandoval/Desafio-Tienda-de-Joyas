import format from 'pg-format';
import { pool } from '../database/connection.js';
import 'dotenv/config';

import { validateQueryParams } from '../utils/query.utils.js';
import { buildJoyasHATEOAS } from '../utils/hateoas.utils.js';
import { BASE_URL } from '../utils/baseUrl.utils.js';

const getTotalPages = async ( limits ) => {
    try {
        
        const countQuery = 'SELECT COUNT(*) FROM inventario';
        const { rows: countResult } = await pool.query( countQuery );
        const total_rows = parseInt( countResult[0].count, 10 );
        const total_pages = Math.ceil( total_rows / limits );
        return { total_pages };
        
    } catch (error) {
        
        throw error;
        
    }
};

const getAllJoyas = async ({ limits = 5, page = 1, order_by = "id_ASC" }) => {
    try {

        const query =
        `SELECT * FROM inventario
        ORDER BY %s %s
        LIMIT %s
        OFFSET %s
        `;

        const [ field, direction ] = order_by.split( "_" );
        const { safeField, safeDirection } = validateQueryParams( field, direction );

        const offset = ( page - 1 ) * limits;

        const formattedQuery = format(
            query,
            safeField,
            safeDirection,
            limits,
            offset
        );

        const queryResult = await pool.query( formattedQuery );
        const joyas = queryResult.rows;
        
        if ( queryResult.rowCount === 0 ) {
            const error = new Error(`Not Found. There is no Joyas to show`);
            error.status = 404;
            throw error;
        }

        const { total_pages } = await getTotalPages( limits );

        const HATEOAS = buildJoyasHATEOAS({ joyas, total_pages, limits, page, order_by });
        return HATEOAS;

    } catch (error) {

        throw error;
    }
};

const getJoyasFiltered = async ({ precio_max, precio_min, categoria, metal, nombre }) => {
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
        if ( nombre )       addFilter( 'nombre', 'ILIKE', `%${nombre}%` );

        let query = 'SELECT * FROM inventario';

        if ( filters.length > 0 ) {
            filters = filters.join(' AND ');
            query += ` WHERE ${ filters }`;
        }

        const queryResult = await pool.query( query, values );
        const joyasFiltered = queryResult.rows;

        if ( queryResult.rowCount === 0 ) {
            const error = new Error(`Not Found. There is no Joyas to show with the specified filters`);
            error.status = 404;

            throw error;
        }
        // TODO: Refactor HATEOAS and pagination functions to abstract and use them in both get functions
        return joyasFiltered;

    } catch (error) {

        throw error;

    }
};

const getJoyaById = async ( joyaId ) => {
    try {

        const query = 'SELECT * FROM inventario WHERE id = $1';
        const values = [ joyaId ];

        const queryResult = await pool.query( query, values );
        const joya = queryResult.rows[0];

        if ( queryResult.rowCount === 0 ) {
            const error = new Error(`Not Found. There is no Joya with id ${ joyaId }`);
            error.status = 404;

            throw error;
        }

        return {
            all: `${ BASE_URL }/joyas?limits=5&page=1&order_by=id_ASC`,
            result: joya,
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