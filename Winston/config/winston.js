/**
 * Created by Rötzer on 21.11.2016.
 */


//Load Winston logger
//======================================================
const winston = require('winston');

//Initialize our own logger, based on winston
//======================================================
const logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            json: true,
            timestamp: new Date(),
            maxsize: 5242880, //5MB
            colorize: false
        }),
        new winston.transports.Console({
            level: 'silly',
            handleExceptions: true,
            json: false,
            timestamp: new Date(),
            colorize: true
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({
            filename: 'logs/exceptions.log',
            json: false
        })
    ]
});

//Emit errors
logger.emitErrs = true;

//Exit after logging an uncaughtException (default=true)
logger.exitOnError = true;



module.exports = logger;