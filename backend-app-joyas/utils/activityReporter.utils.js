import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );
const filePath = path.join( __dirname, '..', 'reports', 'activity.json' );

const manageFilePathExistance = () => {
    
    const dir = path.dirname(filePath);

    if ( !fs.existsSync( __dirname ) ) fs.mkdirSync( dir, { recursive: true } );
    if ( !fs.existsSync( filePath ) ) fs.writeFileSync( filePath, '[]' );
};

export const reportActivity = ( dataEntry ) => {
    try {

        manageFilePathExistance();

        const existingData = JSON.parse( fs.readFileSync( filePath, 'utf-8' ) );

        existingData.push( dataEntry );
        const formattedData = JSON.stringify( existingData, null, 4 );

        console.log( formattedData );
        fs.writeFileSync( filePath, formattedData );

    } catch (error) {

        throw error;
    }
};