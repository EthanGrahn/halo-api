require('dotenv').config()
const assert = require('assert')
const HaloWrapper = require('../src/halo.js')
const halo = new HaloWrapper(process.env.API_KEY)
const gamertag = 'MAX1MUM D3ATH'

describe('H5 Player Match History', () => {
  it('Test 1', () => {
    halo.h5.stats.playerMatchHistory(gamertag, 'arena', 0, 1).then((matches) => {
      assert.notStrictEqual(matches, undefined)
      console.log(matches)
    })
  })
})
