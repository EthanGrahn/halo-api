require('dotenv').config();
var haloWrapper = require("./halo.js");
var halo = new haloWrapper(process.env.API_KEY);

halo.metadata.playlists().then((data) => {
  console.log(data);
  console.log(typeof data);
})
.catch((e)=>{
  console.log("bad");
});

halo.metadata.techs().then((data) => {
  console.log(data.ContentItems);
});
