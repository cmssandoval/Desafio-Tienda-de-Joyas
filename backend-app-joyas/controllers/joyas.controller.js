import { joyasModel } from '../models/joyas.model.js';
import { asyncHandler } from '../utils/asyncHandler.utils.js';

const readJoyas = asyncHandler(async ( req, res, next ) => {

    const {
        limits = 5,
        page = 1,
        order_by = "id_ASC"
    } = req.query;
    
    const joyas = await joyasModel.getAllJoyas({ limits, page, order_by });    
    return res.status(200).json( joyas );
    
});

const readJoyasFiltered = asyncHandler(async ( req, res, next ) => {
    const filters = req.query;
    const joyasFiltered = await joyasModel.getJoyasFiltered( filters );    
    return res.status(200).json( joyasFiltered );
});

const readJoyaById = asyncHandler(async ( req, res, next ) => {
    const { id } = req.params;
    const response = await joyasModel.getJoyaById( id );
    
    console.log( response );
    return res.status(200).json( response );
});

const replaceJoyaById = asyncHandler(async ( req, res, next ) => {
    const response = await joyasModel.replaceJoyaById( id );
    throw new Error(`Not implemented!`);
});

const updateJoyaById = asyncHandler(async ( req, res, next ) => {
    const response = await joyasModel.updateJoyaById( id );
    throw new Error(`Not implemented!`);
});

const removeJoyaById = asyncHandler(async ( req, res, next ) => {
    const response = await joyasModel.removeJoyaById( id );
    throw new Error(`Not implemented!`);
});

export const joyasController = {
    readJoyas,
    readJoyasFiltered,
    readJoyaById,
    replaceJoyaById,
    updateJoyaById,
    removeJoyaById,
};