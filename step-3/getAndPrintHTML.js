

function getAndPrintHTMLChunks (options, callBack){
    var https = require('https');
  var chunks = '';
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
function print (html){
    console.log(html);
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
}
getAndPrintHTMLChunks(requestOptions, print);
