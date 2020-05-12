var exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout) }

var os = require('os');

if (os.type() === 'Linux')
  exec("npm run build-linux", puts);
else if (os.type() === 'Darwin')
  exec("npm run build-mac", puts);
else if (os.type() === 'Windows_NT')
  exec("npm run build-windows", puts);
else
  throw new Error("Unsupported OS found: " + os.type());