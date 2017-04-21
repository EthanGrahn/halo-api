# Halo-API-Wrapper-for-Node-JS
API Wrapper for Node JS. Returns a Promise containing the JSON of the requested API Call. 

Mostly started writing this because I wanted to test out working with asynchronous calls and how promises work in node.js. There are some other pretty good wrappers for the Halo API out there that work in node but I thought it would be more fun to try it out myself. Everything works in my testing so that's pretty cool.

Right now this is mostly a rough test. I have the full Halo Wars 2 API supported since not many people seemed to be covering that right now and that's the stuff I'm really interested. The Halo 5 API will be added at some point but there's plenty of other sources for that. 

Main To-do is to get a working rate limiter for the API working so I don't go over on calls. The dev API key only allows 10 calls per 10 seconds so it will be very easy to go over. I'm still working out the best way to rate limit effectively without adding any libraries and it looks like it shouldn't be too hard. I'd like to work in something like this guy has here: http://www.matteoagosti.com/blog/2013/01/22/rate-limiting-function-calls-in-javascript/. Seems pretty straight forward and doesn't involve importing another library.

Once everythings straighened out a bit I might push the package to npm.
