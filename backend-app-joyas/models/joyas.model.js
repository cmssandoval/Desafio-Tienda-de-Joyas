import { pool } from '../database/connection.js';

const getAllJoyas = async () => {
    try {
        const query = 'SELECT * FROM inventario';
        const { rows: result } = await pool.query(query);
        return result;
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