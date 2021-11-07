import { HttpWrapper } from '../../httpWrapper'

export class Halo5 {
    private httpWrapper: HttpWrapper
    private readonly METADATA_PATH: string = '/metadata/h5/metadata'

    constructor(httpWrapper: HttpWrapper) {
      this.httpWrapper = httpWrapper
    }

    /**
      * Returns Campaign Missions 
      * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Campaign-Missions?}
      * @example
      * halo.metadata.halo5.campaignMissions().then((missions) => {
      * //Do code here
      * });
      * @returns Promise that resolves with JSON from API
      */
    campaignMissions(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/campaign-missions`)
    }

    /**
    * Returns Commendations 
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Commendations?}
    * @example
    * halo.metadata.halo5.commendations().then((commendations) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    commendations(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/commendations`)
    }

    /**
    * Returns CSR Designations 
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-CSR-Designations?}
    * @example
    * halo.metadata.halo5.csrDesignations().then((designations) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    csrDesignations(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/csr-designations`)
    }

    /**
    * Returns Enemies 
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Enemies?}
    * @example
    * halo.metadata.halo5.enemies().then((enemies) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    enemies(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/enemies`)
    }

    /**
    * Returns Flexible Stats
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Flexible-Stats?}
    * @example
    * halo.metadata.halo5.flexibleStats().then((stats) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    flexibleStats(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/flexible-stats`)
    }

    /**
    * Returns Game Base Variants
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Game-Base-Variants?}
    * @example
    * halo.metadata.halo5.gameBaseVariants().then((variants) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    gameBaseVariants(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/game-base-variants`)
    }

    /**
    * Returns Game Variants
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Game-Variant?}
    * @param {string} id ID of game variant
    * @example
    * halo.metadata.halo5.gameVariants().then((variants) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    gameVariants(id: string): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/game-variants/${id}`)
    }

    /**
    * Returns Impulses
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Impulses?}
    * @example
    * halo.metadata.halo5.impulses().then((impulses) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    impulses(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/impulses`)
    }

    /**
    * Returns Map Variant
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Map-Variant?}
    * @param {string} id ID of map variant
    * @example
    * halo.metadata.halo5.mapVariant().then((variant) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    mapVariant(id: string): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/map-variants/${id}`)
    }

    /**
    * Returns Maps
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Maps?}
    * @example
    * halo.metadata.halo5.maps().then((maps) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    maps(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/maps`)
    }

    /**
    * Returns Medals
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Medals?}
    * @example
    * halo.metadata.halo5.medals().then((medals) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    medals(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/medals`)
    }

    /**
    * Returns Playlists
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Playlists?}
    * @example
    * halo.metadata.halo5.playlists().then((playlists) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    playlists(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/playlists`)
    }

    /**
    * Returns Requisition
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Requisition?}
    * @param {string} id ID of requisition
    * @example
    * halo.metadata.halo5.requisition().then((requisition) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    requisition(id: string): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/requisitions/${id}`)
    }

    /**
    * Returns Requisition Pack
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Requisition-Pack?}
    * @param {string} id ID of requisition pack
    * @example
    * halo.metadata.halo5.requisitionPack().then((pack) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    requisitionPack(id: string): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/requisition-packs/${id}`)
    }

    /**
    * Returns Seasons
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Seasons?}
    * @example
    * halo.metadata.halo5.seasons().then((seasons) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    seasons(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/seasons`)
    }

    /**
    * Returns Skulls
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Skulls?}
    * @example
    * halo.metadata.halo5.skulls().then((skulls) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    skulls(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/skulls`)
    }

    /**
    * Returns Spartan Ranks
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Spartan-Ranks?}
    * @example
    * halo.metadata.halo5.spartanRanks().then((ranks) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    spartanRanks(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/spartan-ranks`)
    }

    /**
    * Returns Team Colors
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Team-Colors?}
    * @example
    * halo.metadata.halo5.teamColors().then((colors) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    teamColors(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/team-colors`)
    }

    /**
    * Returns Vehicles
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Vehicles?}
    * @example
    * halo.metadata.halo5.vehicles().then((vehicles) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    vehicles(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/vehicles`)
    }

    /**
    * Returns Weapons
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Weapons?}
    * @example
    * halo.metadata.halo5.weapons().then((weapons) => {
    * //Do code here
    * });
    * @returns Promise that resolves with JSON from API
    */
    weapons(): Promise<any> {
      return this.httpWrapper.request(`${this.METADATA_PATH}/weapons`)
    }
}