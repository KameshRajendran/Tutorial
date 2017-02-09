var spawn = require('child_process').spawn;
var readfile = process.argv[2];
var writelocation = process.argv[3];

ls = spawn('phantomjs', ['joePhantom.js', readfile, writelocation]);

ls.stdout.on('data', function (data) {
    
    console.log(data);
});

ls.stderr.on('data', function (data) {
});

ls.on('close', function (code) {
});
