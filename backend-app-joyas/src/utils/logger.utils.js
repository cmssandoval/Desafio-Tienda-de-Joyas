import winston from 'winston';

/**
 * Creates an instance of a winston Logger with the setted configuration.
 */
export const logger = winston.createLogger({

    level: 'info',
    
    format: winston.format.combine(

        winston.format.timestamp(),
        winston.format.json(),

    ),

    transports: [

        new winston.transports.File({

            filename: 'logs/warnings.log',
            level: 'warn',

        }),

        new winston.transports.Console({

            format: winston.format.combine(

                winston.format.colorize(),
                winston.format.simple(),
            ),

        }),

    ],

});