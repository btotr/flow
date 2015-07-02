var Prince = require("prince");
var jade = require('jade');
var fs = require('fs');

var title = "flow-book"
var input = 'bin/'+title+'.html';
var output = 'bin/'+title+'.pdf';

// generate html
jade.renderFile(title + '/index.jade', {}, function (error, html) {
    if (error) throw error;
    // save index.html
    fs.writeFile(input, html, function(error) {
        if (error) throw error;
        // generate pdf
        Prince()
            .inputs(input)
            .output(output)
            .execute()
            .then(function () {
                console.log("pdf generated: "+ output);
            }, function (error) {
                throw error;
            })
    });
});