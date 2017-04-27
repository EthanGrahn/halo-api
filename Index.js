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

// halo.hw2.metadata.campaignLogs().then((levels) => {
//   console.log(levels);
// });
//
// halo.hw2.stats.playerCampaignProgress('googlrr').then((stats)=>{
//   console.log(stats);
// });

// halo.hw2.metadata.playlists().then((playlists) => {
//   console.log(playlists.ContentItems);
// });

halo.hw2.stats.playerPlaylistRatings('a177b19a32164962abdc4653dfb7911b', 'googlrr').then((ratings)=>{
  console.log(ratings);
});
// halo.hw2.stats.playerXPs('googlrr').then( (ratings) =>{
//   console.log(ratings);
// }).catch( (rejected) => {
//   console.log("oh no");
// });
