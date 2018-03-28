
const helper = require("opal-helper");

const { systemLogger, flowLogger } = helper.util.logger;



// systemLogger.log({
//   level: 'info',
//   message: 'testing System Logger'
// });

flowLogger.log('info', 'Test Flow Log Message', { something: 'This is metadata' });
systemLogger.log('info', 'Test System Log Message', { something: 'This is system metadata' });


console.log("hello");
