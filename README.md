# Halo API Wrapper for Node JS
Returns a Promise containing the JSON of the requested API Call.
List of API Calls found at https://developer.haloapi.com/docs/services/.
Calls are made with the same titles found in the above link, but in camelcasing. So, 'Player CSR' becomes playerCSR. 'Match Events' becomes matchEvents.

Usage:

Install via NPM
npm install --save halo-api-wrapper

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
Mostly started writing this because I wanted to test out working with asynchronous calls and how promises work in node.js. There are some other pretty good wrappers for the Halo API out there that work in node but I thought it would be more fun to try it out myself. Everything works in my testing so that's pretty cool.

Main To-do is to get a working rate limiter for the API working so I don't go over on calls. The dev API key only allows 10 calls per 10 seconds so it will be very easy to go over. I'm still working out the best way to rate limit effectively without adding any libraries and it looks like it shouldn't be too hard. I'd like to work in something like this guy has here: http://www.matteoagosti.com/blog/2013/01/22/rate-limiting-function-calls-in-javascript/. Seems pretty straight forward and doesn't involve importing another library.

Once everything's straightened out a bit I might push the package to npm.
