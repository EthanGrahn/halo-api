import { HttpWrapper } from '../httpWrapper'
import { Halo5UGC } from './halo-5'

export * from './halo-5'

export class UGC {
  public halo5: Halo5UGC

  constructor(httpWrapper: HttpWrapper) {
    this.halo5 = new Halo5UGC(httpWrapper)
  }
}