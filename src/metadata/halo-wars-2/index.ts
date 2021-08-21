import { HttpWrapper } from '../../httpWrapper'

export class HaloWars2 {
  private httpWrapper: HttpWrapper
  private readonly METADATA_PATH: string = '/metadata/hw2'

  constructor(httpWrapper: HttpWrapper) {
    this.httpWrapper = httpWrapper
  }

  /**
  * Returns Campaign Levels.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Campaign-Levels?}
  * @example
  * halo.metadata.hw2.campaignLevels().then( (levels) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  campaignLevels(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/campaign-levels`)
  }

  /**
  * Returns Campaign Logs.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Campaign-Logs?}
  * @example
  * halo.metadata.hw2.campaignLogs().then( (logs) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  campaignLogs(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/campaign-logs`)
  }

  /**
  * Returns Card Keywords.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Card-Keywords?}
  * @example
  * halo.metadata.hw2.cardKeywords().then( (keywords) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  cardKeywords(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/card-keywords`)
  }

  /**
  * Returns Cards.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Cards?}
  * @example
  * halo.metadata.hw2.cards().then( (cards) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  cards(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/cards`)
  }

  /**
  * Returns CSR Designations.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-CSR-Designations?}
  * @example
  * halo.metadata.hw2.csrDesignations().then( (designations) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  csrDesignations(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/csr-designations`)
  }

  /**
  * Returns Difficulties.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Difficulties?}
  * @example
  * halo.metadata.hw2.difficulties().then( (difficulties) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  difficulties(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/difficulties`)
  }

  /**
  * Returns Game Object Categories.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Game-Object-Categories?}
  * @example
  * halo.metadata.hw2.gameObjectCategories().then( (categories) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  gameObjectCategories(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/game-object-categories`)
  }

  /**
  * Returns Game Objects.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Game-Objects?}
  * @example
  * halo.metadata.hw2.gameObjects().then( (objs) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  gameObjects(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/game-objects`)
  }

  /**
  * Returns Leader Powers.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Leader-Powers?}
  * @example
  * halo.metadata.hw2.leaderPowers().then( (powers) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  leaderPowers(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/leader-powers`)
  }

  /**
  * Returns Leaders.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Leaders?}
  * @example
  * halo.metadata.hw2.leaders().then( (leaders) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  leaders(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/leaders`)
  }

  /**
  * Returns Maps.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Maps?}
  * @example
  * halo.metadata.hw2.maps().then( (maps) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  maps(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/maps`)
  }

  /**
  * Returns Packs.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Packs?}
  * @example
  * halo.metadata.hw2.packs().then( (packs) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  packs(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/packs`)
  }

  /**
  * Returns Playlists.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Playlists?}
  * @example
  * halo.metadata.hw2.playlists().then( (playlists) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playlists(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/playlists`)
  }

  /**
  * Returns Seasons.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Seasons?}
  * @example
  * halo.metadata.hw2.seasons().then( (seasons) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  seasons(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/seasons`)
  }

  /**
  * Returns Spartan Ranks.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Spartan-Ranks?}
  * @example
  * halo.metadata.hw2.spartanRanks().then( (ranks) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  spartanRanks(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/spartan-ranks`)
  }

  /**
  * Returns Techs.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Techs?}
  * @example
  * halo.metadata.hw2.techs().then( (techs) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  techs(): Promise<any> {
    return this.httpWrapper.request(`${this.METADATA_PATH}/techs`)
  }
}
