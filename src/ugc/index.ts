import { HttpWrapper } from '../httpWrapper'
import { Halo5 } from './halo-5'

export class UGC {
    public halo5: Halo5

    constructor(httpWrapper: HttpWrapper) {
        this.halo5 = new Halo5(httpWrapper)
    }
}