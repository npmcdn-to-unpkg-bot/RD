call npm install
start "COMPILER" "%ProgramFiles%\nodejs\npm.cmd" run watch
start "HTTP SERVER" "%ProgramFiles%\nodejs\npm.cmd" run serve
start chrome "http://127.0.0.1:9090/src/"

