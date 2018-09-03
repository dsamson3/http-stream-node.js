

function getAndPrintHTMLChunks (options){
    var https = require('https');
  var chunks = '';
  https.get(options, function(reponse){
      reponse.setEncoding('UTF-8');
      reponse.on("data", function(data){
          chunks += data;
      });
      reponse.on("end", function(){
          console.log(chunks);
      });
  });
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
}
getAndPrintHTMLChunks(requestOptions,);
