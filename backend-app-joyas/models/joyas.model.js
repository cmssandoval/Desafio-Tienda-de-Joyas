import { pool } from '../database/connection.js';

const getAllJoyas = async () => {
    const query = 'SELECT * FROM inventario';
    const { rows: result } = await pool.query(query);
    return result;
};

export const joyasModel = {
    getAllJoyas,
};