import { HttpWrapper } from '../../httpWrapper'

export class Halo5 {
    private httpWrapper: HttpWrapper = undefined
    private readonly METADATA_PATH: string = '/metadata/h5/metadata'

    constructor(httpWrapper: HttpWrapper) {
        this.httpWrapper = httpWrapper
    }

    /**
      * Returns Campaign Missions </br>
      * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Campaign-Missions?}
      * @example
      * halo.metadata.halo5.campaignMissions().then( (missions) => {
      * //Do code here
      * });
      * @returns {Promise} Promise of JSON from API
      */
    campaignMissions(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/campaign-missions`)
    }

    /**
    * Returns Commendations </br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Commendations?}
    * @example
    * halo.metadata.halo5.commendations().then( (commendations) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    commendations(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/commendations`)
    }

    /**
    * Returns CSR Designations </br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-CSR-Designations?}
    * @example
    * halo.metadata.halo5.csrDesignations().then( (designations) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    csrDesignations(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/csr-designations`)
    }

    /**
    * Returns Enemies </br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Enemies?}
    * @example
    * halo.metadata.halo5.enemies().then( (enemies) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    enemies(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/enemies`)
    }

    /**
    * Returns Flexible Stats</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Flexible-Stats?}
    * @example
    * halo.metadata.halo5.flexibleStats().then( (stats) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    flexibleStats(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/flexible-stats`)
    }

    /**
    * Returns Game Base Variants</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Game-Base-Variants?}
    * @example
    * halo.metadata.halo5.gameBaseVariants().then( (variants) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    gameBaseVariants(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/game-base-variants`)
    }

    /**
    * Returns Game Variants</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Game-Variant?}
    * @example
    * halo.metadata.halo5.gameVariants().then( (variants) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    gameVariants = function (id) {
        return this.httpWrapper.request(`${this.METADATA_PATH}/game-variants/${this.id}`)
    }

    /**
    * Returns Impulses</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Impulses?}
    * @example
    * halo.metadata.halo5.impulses().then( (impulses) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    impulses(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/impulses`)
    }

    /**
    * Returns Map Variant</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Map-Variant?}
    * @example
    * halo.metadata.halo5.mapVariant().then( (variant) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    mapVariant = function (id) {
        return this.httpWrapper.request(`${this.METADATA_PATH}/map-variants/${this.id}`)
    }

    /**
    * Returns Maps</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Maps?}
    * @example
    * halo.metadata.halo5.maps().then( (maps) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    maps(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/maps`)
    }

    /**
    * Returns Medals</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Medals?}
    * @example
    * halo.metadata.halo5.medals().then( (medals) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    medals(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/medals`)
    }

    /**
    * Returns Playlists</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Playlists?}
    * @example
    * halo.metadata.halo5.playlists().then( (playlists) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    playlists(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/playlists`)
    }

    /**
    * Returns Requisition</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Requisition?}
    * @param {string} - ID of Requisition
    * @example
    * halo.metadata.halo5.requisition().then( (requisition) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    requisition = function (id) {
        return this.httpWrapper.request(`${this.METADATA_PATH}/requisitions/${this.id}`)
    }

    /**
    * Returns Requisition Pack</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Requisition-Pack?}
    * @param {string} - ID of Requisition Pack
    * @example
    * halo.metadata.halo5.requisitionPack().then( (pack) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    requisitionPack = function (id) {
        return this.httpWrapper.request(`${this.METADATA_PATH}/requisition-packs/${this.id}`)
    }

    /**
    * Returns Seasons</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Seasons?}
    * @example
    * halo.metadata.halo5.seasons().then( (seasons) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    seasons(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/seasons`)
    }

    /**
    * Returns Skulls</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Skulls?}
    * @example
    * halo.metadata.halo5.skulls().then( (skulls) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    skulls(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/skulls`)
    }

    /**
    * Returns Spartan Ranks</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Spartan-Ranks?}
    * @example
    * halo.metadata.halo5.spartanRanks().then( (ranks) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    spartanRanks(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/spartan-ranks`)
    }

    /**
    * Returns Team Colors</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Team-Colors?}
    * @example
    * halo.metadata.halo5.teamColors().then( (colors) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    teamColors(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/team-colors`)
    }

    /**
    * Returns Vehicles</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Vehicles?}
    * @example
    * halo.metadata.halo5.vehicles().then( (vehicles) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    vehicles(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/vehicles`)
    }

    /**
    * Returns Weapons</br>
    * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Weapons?}
    * @example
    * halo.metadata.halo5.weapons().then( (weapons) => {
    * //Do code here
    * });
    * @returns {Promise} Promise of JSON from API
    */
    weapons(): Promise<any> {
        return this.httpWrapper.request(`${this.METADATA_PATH}/weapons`)
    }
}