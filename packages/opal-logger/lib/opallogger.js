/**
 *  Copyright Telligro Pte Ltd 2017
 *
 *  This file is part of OPAL.
 *
 *  OPAL is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  OPAL is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with OPAL.  If not, see <http://www.gnu.org/licenses/>.
 */


var appRoot = require('app-root-path');
var winston = require('winston');
var winstonLogstash = require('./winston-logstash');

const check = require('check-types');

var opalConfig = require('config');


// Two loggers are defined in the system. One is for Opal system logs
// The other can be used by the flow nodes

    // For future:  when the winston-logstash module is upgraded to work with winston v 3.x
    // winston.loggers.add('systemLogger', opalConfig.get('logger.systemLogger.options'));
    // winston.loggers.add('flowLogger', opalConfig.get('logger.flowLogger.options'));
    //
    // winston.loggers.add('systemLogger', opalConfig.get('logger.systemLogger.transports.file'));
    // winston.loggers.add('flowLogger', opalConfig.get('logger.flowLogger.transports.file'));

var systemLogger;
var flowLogger;
var diagnosticsLogger;

if(!check.undefined(opalConfig.get('logger.systemLogger.options'))) {
   systemLogger = new (winston.Logger)();
   var slOpts = opalConfig.get('logger.systemLogger.options');

   // Set  up transports for the loggers
   var slTpt = {transports: [new (winston.transports.File)(opalConfig.get('logger.systemLogger.transports.file')),
                             new (winstonLogstash.Logstash)(opalConfig.get('logger.systemLogger.transports.logstash'))]};

   Object.assign(slOpts, slTpt);
   systemLogger.configure(slOpts);

}

if(!check.undefined(opalConfig.get('logger.flowLogger.options'))) {
   flowLogger = new (winston.Logger)();
   var flOpts = opalConfig.get('logger.flowLogger.options');
   // Set  up transports for the logger
   var flTpt = {transports: [new (winston.transports.File)(opalConfig.get('logger.flowLogger.transports.file'))]};

   Object.assign(flOpts, flTpt);
   flowLogger.configure(flOpts);
}

if(!check.undefined(opalConfig.get('logger.diagnosticsLogger.options'))) {
   diagnosticsLogger = new (winston.Logger)();
   var flOpts = opalConfig.get('logger.diagnosticsLogger.options');
   // Set  up transports for the logger
   var flTpt = {transports: [new (winston.transports.File)(opalConfig.get('logger.diagnosticsLogger.transports.file'))]};

   Object.assign(flOpts, flTpt);
   diagnosticsLogger.configure(flOpts);
}


module.exports = {systemLogger, flowLogger, diagnosticsLogger};
