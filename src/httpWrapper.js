var https = require("https");

var options = {
  host: 'www.haloapi.com' ,
  path: '',
  method: 'GET',
  headers: {"Ocp-Apim-Subscription-Key": ""}
};

function httpWrapper(API_KEY){
  options.headers["Ocp-Apim-Subscription-Key"] = API_KEY;
}

httpWrapper.prototype.queryAPI = function(path) {
  return new Promise((resolve, reject) => {
    let _options = options;
    _options.path = encodeURI(path);
    let responseText = '';
    let request = https.request(_options, (response) => {
      response.on('data', (data) => {
        responseText += data;
      });
      response.on('end', () => {
        resolve(JSON.parse(responseText));
      })
    });
    request.on('error', (e) => {reject(e)});
    request.end();
  });
}

module.exports = httpWrapper;
