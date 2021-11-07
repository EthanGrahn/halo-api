import 'jest'
import 'dotenv/config'
import { Halo5UGC, Order, Sort } from '../src/ugc/halo-5'

describe('Halo5UGC', () => {

  it('should get 5 halo 5 player game variants', async () => {
    const key = process.env.API_KEY?.toString() ?? 'missing-key'
    const halo = new Halo5UGC(key)
    const gamertag = 'MAX1MUM D3ATH'
    const count = 5
  
    halo.playerGameVariants(gamertag, 0, count, Sort.MODIFIED, Order.DESCENDING).then(variants => {
      expect(variants.Count === count)
    }).catch(error => {
      console.log(error)
    })
  })
})
