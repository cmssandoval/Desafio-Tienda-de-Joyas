import { joyasModel } from '../models/joyas.model.js';

const readJoyas = async ( req, res ) => {
    const response = await joyasModel.getAllJoyas();
    
    console.log( response );
    return res.status(200).json( response );
};

export const joyasController = {
    readJoyas,
};