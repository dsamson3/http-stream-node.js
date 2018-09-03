var getHTML = require('../http-functions');


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/toLowerCase.html'
};


function printLower (html){
    console.log(html.toString().toLowerCase());
}



printLower(requestOptions, printLower);