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

let appRoot = require('app-root-path');
let opalConfig = require("config");

let { systemLogger, flowLogger, diagnosticsLogger } = require("opal-logger");


module.exports = {
  util: {
    appRoot: appRoot,
    opalConfig: opalConfig,
    logger: {
      systemLogger: systemLogger,
      flowLogger: flowLogger,
      diagnosticsLogger: diagnosticsLogger
    }
  }
};
