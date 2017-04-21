//Index.js serves only to test the API.

require('dotenv').config();
var haloWrapper = require("./src/halo.js");
var halo = new haloWrapper(process.env.API_KEY);


// halo.stats.playerXPs("googlrr").then( (XPs)=>{
//   console.log(XPs.Results);
// })
//
// halo.stats.playerMatchHistory('googlrr').then( (matches) => {
//   console.log(matches);
// });
//
// halo.metadata.playlists().then((data) => {
//   console.log(data);
//   console.log(typeof data);
// })
// .catch((e)=>{
//   console.log("bad");
// });
//
// halo.metadata.techs().then((data) => {
//   console.log(data.ContentItems);
// });
