require('dotenv').config()
const { expect } = require('chai')
const HaloWrapper = require('../src/halo.js')
const halo = new HaloWrapper(process.env.API_KEY)
const gamertag = 'MAX1MUM D3ATH'

const matchHistoryResultKeys = [
  'Links',
  'Id',
  'HopperId',
  'MapId',
  'MapVariant',
  'GameBaseVariantId',
  'GameVariant',
  'MatchDuration',
  'MatchCompletedDate',
  'Teams',
  'Players',
  'IsTeamGame',
  'SeasonId',
  'MatchCompletedDateFidelity'
]

describe('H5 Player Match History', () => {
  it('Get 1 Arena Match', (done) => {
    halo.h5.stats.playerMatchHistory(gamertag, 'arena', 0, 1).then((matches) => {
      expect(matches).to.be.an('object')
      expect(matches).to.have.property('ResultCount', 1)
      expect(matches.Results[0]).to.have.keys(matchHistoryResultKeys)
      done()
    })
  })
})
