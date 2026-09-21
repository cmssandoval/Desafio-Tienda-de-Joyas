import { BASE_URL } from './baseUrl.utils.js';

export const buildJoyasHATEOAS = ({ joyas, total_pages, limits, page, order_by }) => {

    try {

        const results = joyas.map(( joya ) => {
            return {
                ...joya,
                href: `${ BASE_URL }/joyas/joya/${ joya.id }`,
            };
        }).slice( 0, limits );

        return {

            results,
            total_pages,
            page,
            limits,
            next:
                (total_pages <= parseInt( page, 10 ))
                    ? null
                    : `${BASE_URL}/joyas?limits=${ limits }&page=${parseInt( page, 10 ) + 1}&order_by=${ order_by }`,
            previous:
                (page <= 1 )
                    ? null
                    : `${BASE_URL}/joyas?limits=${ limits }&page=${parseInt( page, 10 ) - 1}&order_by=${ order_by }`,
                    
        };

    } catch ( error ) {
        
        throw error;

    }

};