var getHTML = require('../http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/toLowerCase.html'
};


function printLower (html){
    console.log(html.toString().toUpperCase());
}



printLower(requestOptions, printLower);