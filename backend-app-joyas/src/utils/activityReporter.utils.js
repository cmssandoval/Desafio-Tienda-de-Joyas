import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );
const filePath = path.join( __dirname, '..', 'reports', 'activity.json' );

const manageFilePathExistance = () => {
    
    const dir = path.dirname(filePath);

    if ( !fs.existsSync( dir ) ) fs.mkdirSync( dir, { recursive: true } );
    if ( !fs.existsSync( filePath ) ) fs.writeFileSync( filePath, '[]' );
};

const readActivityReport = () => {
    try {
        
        const response = JSON.parse( fs.readFileSync( filePath, 'utf-8' ) );
        return response;

    } catch (error) {
        
        console.log(error);
        return [];

    }
};

export const reportActivity = ( dataEntry ) => {
    try {

        manageFilePathExistance();
        const existingData = readActivityReport();

        existingData.push( dataEntry );
        const formattedData = JSON.stringify( existingData, null, 4 );

        console.log( formattedData );
        fs.writeFileSync( filePath, formattedData );

    } catch (error) {

        throw error;
    }
};