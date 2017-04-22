//Index.js serves only to test the API.
require('dotenv').config();
var haloWrapper = require("./src/halo.js");
var halo = new haloWrapper(process.env.API_KEY);

// halo.hw2.stats.playerMatchHistory('googlrr').then( (matches) => {
//   console.log(matches);
// });
// halo.h5.ugc.playerGameVariants('googlrr').then((games) => {
//   console.log(games);
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
// halo.h5.stats.PCPlayerServiceRecords("googlrr").then((records) => {
//   console.log(records.Results);
// });
