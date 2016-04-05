var chalk = require('chalk');

module.exports = function (message) {
  console.error(chalk.white.bgRed.bold(message));
  process.exit(1);
}