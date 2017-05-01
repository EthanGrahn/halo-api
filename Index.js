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
//

// For getting the playlist IDs (needed for other APIs)
// halo.hw2.metadata.playlists().then((playlists) => {
//   for(var x = 0; x < playlists.ContentItems.length; x++) {
//       console.log(playlists.ContentItems[x].View.Title + "   Identity: " + playlists.ContentItems[x].View.Identity);
//   }
// });

// halo.hw2.stats.playerPlaylistRatings('a177b19a32164962abdc4653dfb7911b', 'googlrr').then((ratings)=>{
//   console.log(ratings);
// });
// halo.hw2.stats.playerXPs('googlrr').then( (ratings) =>{
//   console.log(ratings);
// }).catch( (rejected) => {
//   console.log("oh no");
// });

// halo.hw2.stats.playerPlaylistRatings('532bfd6c3db445b7a01011460b862be6', 'Googlrr').then((ratings)=>{
//   console.log(ratings.Results);
//   for(let x = 0; x < ratings.Results.length; x++){
//     console.log(ratings.Results[x]);
//   }
// });

// halo.hw2.metadata.gameObjects().then( (objects) => {
//   //console.log(objects);
//   let content = objects.ContentItems;
//   for(let x = 0; x < content.length; x++){
//     console.log(content[x].View.HW2Object.DisplayInfo.View.HW2ObjectDisplayInfo.Name);//.HW2ObjectDisplayInfo + "\t" + content[x].View.Identity);
//   }
// });


halo.hw2.metadata.techs().then( (techs) => {
  console.log(techs.ContentItems);
});
