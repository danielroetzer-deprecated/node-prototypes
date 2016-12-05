/**
 * Created by Rötzer on 21.11.2016.
 */


//Load the defined logger from the configs
//======================================================
const logger = require('./config/winston');



//Logging different sample messages
//======================================================
logger.silly('Logging level = silly');
logger.debug('Logging level = debug');
logger.verbose('Logging level = verbose');
logger.info('Logging level = info');
logger.warn('Logging level = warn');
logger.error('Logging level = error');



//Same result as above, just different method
logger.log('silly','Logging level = silly');
logger.log('debug','Logging level = debug');
logger.log('verbose','Logging level = verbose');
logger.log('info','Logging level = info');
logger.log('warn','Logging level = warn');
logger.log('error','Logging level = error');

/*
//uncaughtException
const y=2;
y=4;
*/

//Log caughtException
/*
 try {
 const x=2;
 x=4;
 }catch (err){
 logger.error(err);
 }*/

