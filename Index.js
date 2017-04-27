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
// halo.h5.stats.PCPlayerServiceRecords("googlrr").then((records) => {
//   console.log(records.Results);
// });

halo.hw2.metadata.campaignLogs().then((levels) => {
  console.log(levels);
});
