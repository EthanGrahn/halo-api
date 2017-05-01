# Halo API Wrapper for Node JS
See https://googlrr.github.io/Halo-API-Wrapper-for-Node-JS/index.html for documentation!
Full Source Code available at https://github.com/Googlrr/Halo-API-Wrapper-for-Node-JS


Returns a Promise containing the JSON of the requested API Call.
List of API Calls found at https://developer.haloapi.com/docs/services/.

Check 'classes' in the documentation for a complete list of commands. Each command should have an example of how it should be used.


Install via NPM:
```
npm install --save halo-api-wrapper
```

Usage:

```
var haloWrapper = require('halo-api-wrapper');
var halo = new haloWrapper(YOUR_API_KEY);

//For Halo 5
halo.h5.stats.PCPlayerServiceRecords("googlrr").then((records) => {
  console.log(records.Results);
});

//For Halo Wars 2
halo.hw2.stats.playerMatchHistory('googlrr').then( (matches) => {
  console.log(matches);
});

//Calls are in the style of halo.game.APIType.CallofAPI(params)
//.then( (results) => {
//  stuff you want to do with results
//});
```

Full API should be covered now. Any issues please open an issue at https://github.com/Googlrr/Halo-API-Wrapper-for-Node-JS/issues and I'll look at it as soon as possible! In my expience (mostly with the Halo Wars 2 portions) all of the calls return results correctly.

Started mostly as a project to learn about working with asynchronous calls and promises in Node.js, I decided to complete the API wrapper to include full coverage of the Halo API.

This is purely a wrapper for the API and does not include any caching or rate limiting. I've thought about adding those but they're a bit out of the scope of what I was planning here. This is purely an easier way to interface with the Halo API. If you're looking to control your calls I recommend checking out this link: http://www.matteoagosti.com/blog/2013/01/22/rate-limiting-function-calls-in-javascript/. It has a pretty simple algorithm that should get some quick and dirty rate limiting going. 
