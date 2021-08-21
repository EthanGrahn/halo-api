import { Metadata } from './metadata'
import { Profile } from './profile'
import { Stats } from './stats'
import { UGC } from './ugc'
import { HttpWrapper } from './httpWrapper'

class HaloAPI {
    protected httpWrapper: HttpWrapper 
    public metadata: Metadata
    public ugc: UGC
    public stats: Stats
    public profile: Profile

    constructor(apiKey: string) {
        this.httpWrapper = new HttpWrapper(apiKey)
        this.metadata = new Metadata(this.httpWrapper)
        this.ugc = new UGC(this.httpWrapper)
        this.stats = new Stats(this.httpWrapper)
        this.profile = new Profile(this.httpWrapper)
    }
}

export = HaloAPI
