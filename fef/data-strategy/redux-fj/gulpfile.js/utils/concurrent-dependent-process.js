var exec = require('child_process').exec;

module.exports = function(longRunningCmd, shortRunningCmd) {
  var server = exec(longRunningCmd);
  var tests = exec(shortRunningCmd);

  tests.stdout.on('data', function(data) {
    console.log(data);
  });
  tests.stderr.on('data', function(data) {
    console.log(data);
  });
  tests.on('close', function(code) {
    console.log('closing code: ' + code);
    exec('taskkill /PID ' + server.pid + ' /T /F');
  });
};