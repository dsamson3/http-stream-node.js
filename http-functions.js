function getHTML (options, callBack){
    var chunks = '';
    var https = require('https')
  https.get(options, function(reponse){
      reponse.setEncoding('UTF-8');
      reponse.on("data", function(data){
          chunks += data;
      });
      reponse.on("end", function(){
          return callBack(chunks);
      });
  });
}
function printHTML (html){
    console.log(html);
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
}

module.exports = (getHTML(requestOptions, printHTML));