import format from 'pg-format';
import { pool } from '../database/connection.js';
import 'dotenv/config'

const BASE_URL =
    process.env.NODE_ENV === "production"
        ? process.eventNames.DOMAIN_URL_APP
        : `http://localhost:${process.env.SERVER_PORT}`;

const countAllJoyas = async ( limit ) => {
    const countQuery = 'SELECT COUNT(*) FROM inventario';
    const { rows: countResult } = await pool.query( countQuery );
    const total_rows = parseInt( countResult[0].count, 10 );
    const total_pages = Math.ceil( total_rows / limit);
    return { total_pages };
};

const getAllJoyas = async ({ limit = 5, page = 1, order_by = "id_ASC" }) => {
    
    try {
        const query =
        `SELECT * FROM inventario
        ORDER BY %s %s
        LIMIT %s
        OFFSET %s
        `;

        const [ field, direction ] = order_by.split("_");

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
            ? field.toLowerCase()
            : "id";

        const safeDirection =
            directionList.includes(direction.toUpperCase())
            ? direction.toUpperCase()
            : "ASC";

        const offset = ( page - 1 ) * limit;

        const formattedQuery = format(
            query,
            safeField,
            safeDirection,
            limit,
            offset
        );

        const { rows: joyas } = await pool.query( formattedQuery );

        const results = joyas.map(( joya ) => {
            return {
                ...joya,
                href: `${BASE_URL}/joyas/joya/${joya.id}`,
            };
        }).slice( 0, 5 );

        const { total_pages } = await countAllJoyas( limit );

        return {
            results,
            total_pages,
            page,
            limit,
            next:
                (total_pages <= parseInt( page, 10 ))
                    ? null
                    : `${BASE_URL}/joyas?limit=${ limit }&page=${parseInt( page, 10 ) + 1}&order_by=${ order_by }`,
            previous:
                (page <= 1 )
                    ? null
                    : `${BASE_URL}/joyas?limit=${ limit }&page=${parseInt( page, 10 ) - 1}&order_by=${ order_by }`,
        };
    } catch (error) {
        throw error;
    }
};

const getJoyasFiltered = async () => {
    try {
        throw new Error(`Not implemented!`);

        // const query = 'SELECT * FROM inventario';
        // const { rows: result } = await pool.query(query);
        return result;
    } catch (error) {
        throw error;
    }
};


const getJoyaById = async ( joyaId ) => {
    try {
        const query = 'SELECT * FROM inventario WHERE id = $1';
        const values = [ joyaId ];
        const { rows: result } = await pool.query(query, values);
        return result[0];
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