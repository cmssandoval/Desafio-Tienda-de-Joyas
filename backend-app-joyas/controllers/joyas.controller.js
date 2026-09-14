import { joyasModel } from '../models/joyas.model.js';

const readJoyas = async ( req, res ) => {
    const joyas = await joyasModel.getAllJoyas();
    const HATEOAS = joyasModel.joyasHATEOAS(joyas)
    
    console.log( HATEOAS );
    return res.status(200).json( HATEOAS );
};

const readJoyasFiltered = async ( req, res ) => {
    const response = await joyasModel.getJoyasFiltered();    
    throw new Error(`Not implemented!`);
};

const readJoyaById = async ( req, res ) => {
    const { id } = req.params;
    const response = await joyasModel.getJoyaById( id );
    
    console.log( response );
    return res.status(200).json( response );
};

const replaceJoyaById = async ( req, res ) => {
    const response = await joyasModel.replaceJoyaById( id );
    throw new Error(`Not implemented!`);
};

const updateJoyaById = async ( req, res ) => {
    const response = await joyasModel.updateJoyaById( id );
    throw new Error(`Not implemented!`);
};

const removeJoyaById = async ( req, res ) => {
    const response = await joyasModel.removeJoyaById( id );
    throw new Error(`Not implemented!`);
};

export const joyasController = {
    readJoyas,
    readJoyasFiltered,
    readJoyaById,
    replaceJoyaById,
    updateJoyaById,
    removeJoyaById,
};