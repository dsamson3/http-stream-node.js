var getHTML = require('../http-functions');


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
};


function printLower (html){
    console.log(html.toString().toLowerCase());
}



getHTML(requestOptions, printLower);