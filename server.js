var spawn = require('child_process').spawn;
var file = "\\bin\\phantomjs\\phantomjs.exe"
var readfile = process.argv[2];
var writelocation = process.argv[3];


var path = require("path");
var folderPath = path.resolve(__dirname); 

ls = spawn(folderPath + file, [folderPath + "\\phantom.js", readfile, writelocation]);

ls.stdout.on('data', function (data) {

    console.log("svg file created on the specified location...!!!");
});

ls.stderr.on('data', function (data) {
});

ls.on('close', function (code) {
});
