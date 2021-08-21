import { HttpWrapper } from '../httpWrapper'
import { Halo5 } from './halo-5'

export class Profile {
    public halo5: Halo5

    constructor(httpWrapper: HttpWrapper) {
        this.halo5 = new Halo5(httpWrapper)
    }
}