'use strict';

var liveServer = require("live-server");

module.exports = function (serverConfig) {
  return liveServer.start(serverConfig);
};