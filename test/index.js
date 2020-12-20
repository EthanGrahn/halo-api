require('dotenv').config()
const HaloWrapper = require('../src/halo.js')
const halo = new HaloWrapper(process.env.API_KEY)
const gamertag = 'MAX1MUM D3ATH'

halo.h5.stats.playerMatchHistory(gamertag, 'arena', 0, 1).then((matches) => {
  console.log(matches)
})
