/**
 * Created by Rötzer on 21.11.2016.
 */


//Load the defined logger from the configs
//======================================================
const logger = require('./config/winston');



//Logging different sample messages
logger.silly('Logging level = silly'); //Priority 5
logger.debug('Logging level = debug'); //Priority 4
logger.verbose('Logging level = verbose'); //Priority 3

//Log caughtException
try {
    const x=2;
    x=4;
}catch (err){
    logger.error(err);
}

logger.info('Logging level = info'); //Priority 2
logger.warn('Logging level = warn'); //Priority 1
logger.error('Logging level = error'); //Priority 0

//Log uncaught Exception
const y=2;
y=4;