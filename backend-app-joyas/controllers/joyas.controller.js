import { joyasModel } from '../models/joyas.model.js';

const readJoyas = async ( req, res ) => {

    const {
        limits = 5,
        page = 1,
        order_by = "id_ASC"
    } = req.query;
    
    const isPageValid = /^[1-9]\d*$/.test(page);

    if ( !isPageValid ) {
        return res.status(400).json({
            message: "Invalid page number, number > 0"
        });
    }

    const isLimitsValid = /^[1-9]\d*$/.test(limits);

    if ( !isLimitsValid ) {
        return res.status(400).json({
            message: "Invalid limits number, number > 0"
        });
    }

    const joyas = await joyasModel.getAllJoyas({ limits, page, order_by });    

    console.log( joyas );
    return res.status(200).json( joyas );
};

const readJoyasFiltered = async ( req, res ) => {
    const filters = req.query;
    const joyasFiltered = await joyasModel.getJoyasFiltered( filters );    
    return res.status(200).json( joyasFiltered );
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