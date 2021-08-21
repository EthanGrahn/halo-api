import { Metadata } from './metadata'
import { Profile } from './profile'
import { Stats } from './stats'
import { UGC } from './ugc'
import { HttpWrapper } from './httpWrapper'

export class HaloAPI {
    protected httpWrapper: HttpWrapper = undefined 
    public metadata: Metadata = undefined
    public ugc: UGC = undefined
    public stats: Stats = undefined
    public profile: Profile = undefined

    constructor(apiKey: string) {
        this.httpWrapper = new HttpWrapper(apiKey)
        this.metadata = new Metadata(this.httpWrapper)
        this.ugc = new UGC(this.httpWrapper)
        this.stats = new Stats(this.httpWrapper)
        this.profile = new Profile(this.httpWrapper)
    }
}
