const https = require('https')

const options = {
  host: 'www.haloapi.com',
  path: '',
  method: 'GET',
  headers: { 'Ocp-Apim-Subscription-Key': '' }
}

function HttpWrapper (API_KEY) {
  options.headers['Ocp-Apim-Subscription-Key'] = API_KEY
}

HttpWrapper.prototype.queryAPI = function (path) {
  return new Promise((resolve, reject) => {
    const _options = options
    _options.path = encodeURI(path)
    let responseText = ''
    const request = https.request(_options, (response) => {
      response.on('data', (data) => {
        responseText += data
      })
      response.on('end', () => {
        resolve(JSON.parse(responseText))
      })
    })
    request.on('error', (e) => { reject(e) })
    request.end()
  })
}

module.exports = HttpWrapper
