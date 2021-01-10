const HttpWrapper = require('../httpWrapper.js')

/** Creates a metadata object
* @exports hw2/metadata
* @constructor
*/
module.exports = function metadata (API_KEY) {
  /** Initializes a new HttpWrapper with API Key */
  this._http = new HttpWrapper(API_KEY)

  /**
  * Returns Campaign Levels.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Campaign-Levels?}
  * @example
  * halo.hw2.metadata.campaignLevels().then( (levels) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.campaignLevels = function () {
    return this._http.queryAPI('/metadata/hw2/campaign-levels')
  }

  /**
  * Returns Campaign Logs.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Campaign-Logs?}
  * @example
  * halo.hw2.metadata.campaignLogs().then( (logs) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.campaignLogs = function () {
    return this._http.queryAPI('/metadata/hw2/campaign-logs')
  }

  /**
  * Returns Card Keywords.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Card-Keywords?}
  * @example
  * halo.hw2.metadata.cardKeywords().then( (keywords) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.cardKeywords = function () {
    return this._http.queryAPI('/metadata/hw2/card-keywords')
  }

  /**
  * Returns Cards.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Cards?}
  * @example
  * halo.hw2.metadata.cards().then( (cards) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.cards = function () {
    return this._http.queryAPI('/metadata/hw2/cards')
  }

  /**
  * Returns CSR Designations.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-CSR-Designations?}
  * @example
  * halo.hw2.metadata.csrDesignations().then( (designations) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.csrDesignations = function () {
    return this._http.queryAPI('/metadata/hw2/csr-designations')
  }

  /**
  * Returns Difficulties.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Difficulties?}
  * @example
  * halo.hw2.metadata.difficulties().then( (difficulties) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.difficulties = function () {
    return this._http.queryAPI('/metadata/hw2/difficulties')
  }

  /**
  * Returns Game Object Categories.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Game-Object-Categories?}
  * @example
  * halo.hw2.metadata.gameObjectCategories().then( (categories) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.gameObjectCategories = function () {
    return this._http.queryAPI('/metadata/hw2/game-object-categories')
  }

  /**
  * Returns Game Objects.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Game-Objects?}
  * @example
  * halo.hw2.metadata.gameObjects().then( (objs) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.gameObjects = function () {
    return this._http.queryAPI('/metadata/hw2/game-objects')
  }

  /**
  * Returns Leader Powers.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Leader-Powers?}
  * @example
  * halo.hw2.metadata.leaderPowers().then( (powers) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.leaderPowers = function () {
    return this._http.queryAPI('/metadata/hw2/leader-powers')
  }

  /**
  * Returns Leaders.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Leaders?}
  * @example
  * halo.hw2.metadata.leaders().then( (leaders) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.leaders = function () {
    return this._http.queryAPI('/metadata/hw2/leaders')
  }

  /**
  * Returns Maps.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Maps?}
  * @example
  * halo.hw2.metadata.maps().then( (maps) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.maps = function () {
    return this._http.queryAPI('/metadata/hw2/maps')
  }

  /**
  * Returns Packs.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Packs?}
  * @example
  * halo.hw2.metadata.packs().then( (packs) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.packs = function () {
    return this._http.queryAPI('/metadata/hw2/packs')
  }

  /**
  * Returns Playlists.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Playlists?}
  * @example
  * halo.hw2.metadata.playlists().then( (playlists) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playlists = function () {
    return this._http.queryAPI('/metadata/hw2/playlists')
  }

  /**
  * Returns Seasons.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Seasons?}
  * @example
  * halo.hw2.metadata.seasons().then( (seasons) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.seasons = function () {
    return this._http.queryAPI('/metadata/hw2/seasons')
  }

  /**
  * Returns Spartan Ranks.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Spartan-Ranks?}
  * @example
  * halo.hw2.metadata.spartanRanks().then( (ranks) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.spartanRanks = function () {
    return this._http.queryAPI('/metadata/hw2/spartan-ranks')
  }

  /**
  * Returns Techs.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-Wars-2-Techs?}
  * @example
  * halo.hw2.metadata.techs().then( (techs) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.techs = function () {
    return this._http.queryAPI('/metadata/hw2/techs')
  }
}
