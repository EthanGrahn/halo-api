import { HttpWrapper } from '../httpWrapper'
import { HaloWars2 } from './halo-wars-2'
import { Halo5 } from './halo-5'

export class Stats {
    public haloWars2: HaloWars2
    public halo5: Halo5

    constructor(httpWrapper: HttpWrapper) {
        this.haloWars2 = new HaloWars2(httpWrapper)
        this.halo5 = new Halo5(httpWrapper)
    }
}