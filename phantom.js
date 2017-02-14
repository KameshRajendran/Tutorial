var page = require('webpage').create();
var fs = require('fs');
var workingDir = fs.workingDirectory;
var args = require('system').args;
var readfile = args[1];
var writefileloc = args[2];

page.open('file:///' + workingDir + '/public/swimlane.html', function (status) {
    if (status !== 'success') {
		console.log('file:///' + workingDir + '/public/swimlane.html');
        console.log('Unable to access network');
    } else {
        readfile = args[1];
        var content = fs.read(readfile);
        var ua = page.evaluate(function (content) {
            var diagram = $("#diagram").ejDiagram("instance");
            diagram.load(JSON.parse(content));
            return new XMLSerializer().serializeToString(diagram.exportDiagram({
                fileName: "digram", region: "pageSettings", format: "svg", mode: "data",
            }));
        }, content);
        var dir = "C:/Users/kameshwaranr/Desktop/nodeJS/nodeExpress/myapp/outputfiles"
        dir = writefileloc;
        if (fs.makeTree(dir)) {
            fs.write(dir + "/" + "sample.svg", ua, 'w');
        }
        console.log(dir + "/" + "sample.svg was created");
    }
    phantom.exit();
});