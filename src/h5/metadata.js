const HttpWrapper = require('../httpWrapper.js')

/** Creates a metadata object
* @exports h5/metadata
* @constructor
*/
module.exports = function Metadata (API_KEY) {
  /** Initializes a new HttpWrapper with API Key */
  this._http = new HttpWrapper(API_KEY)

  /**
  * Returns Campaign Missions </br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Campaign-Missions?}
  * @example
  * halo.h5.metadata.campaignMissions().then( (missions) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.campaignMissions = function () {
    return this._http.queryAPI('/metadata/h5/metadata/campaign-missions')
  }

  /**
  * Returns Commendations </br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Commendations?}
  * @example
  * halo.h5.metadata.commendations().then( (commendations) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.commendations = function () {
    return this._http.queryAPI('/metadata/h5/metadata/commendations')
  }

  /**
  * Returns CSR Designations </br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-CSR-Designations?}
  * @example
  * halo.h5.metadata.csrDesignations().then( (designations) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.csrDesignations = function () {
    return this._http.queryAPI('/metadata/h5/metadata/csr-designations')
  }

  /**
  * Returns Enemies </br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Enemies?}
  * @example
  * halo.h5.metadata.enemies().then( (enemies) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.enemies = function () {
    return this._http.queryAPI('/metadata/h5/metadata/enemies')
  }

  /**
  * Returns Flexible Stats</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Flexible-Stats?}
  * @example
  * halo.h5.metadata.flexibleStats().then( (stats) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.flexibleStats = function () {
    return this._http.queryAPI('/metadata/h5/metadata/flexible-stats')
  }

  /**
  * Returns Game Base Variants</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Game-Base-Variants?}
  * @example
  * halo.h5.metadata.gameBaseVariants().then( (variants) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.gameBaseVariants = function () {
    return this._http.queryAPI('/metadata/h5/metadata/game-base-variants')
  }

  /**
  * Returns Game Variants</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Game-Variant?}
  * @example
  * halo.h5.metadata.gameVariants().then( (variants) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.gameVariants = function (id) {
    return this._http.queryAPI(`/metadata/h5/metadata/game-variants/${id}`)
  }

  /**
  * Returns Impulses</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Impulses?}
  * @example
  * halo.h5.metadata.impulses().then( (impulses) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.impulses = function () {
    return this._http.queryAPI('/metadata/h5/metadata/impulses')
  }

  /**
  * Returns Map Variant</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Map-Variant?}
  * @example
  * halo.h5.metadata.mapVariant().then( (variant) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.mapVariant = function (id) {
    return this._http.queryAPI(`/metadata/h5/metadata/map-variants/${id}`)
  }

  /**
  * Returns Maps</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Maps?}
  * @example
  * halo.h5.metadata.maps().then( (maps) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.maps = function () {
    return this._http.queryAPI('/metadata/h5/metadata/maps')
  }

  /**
  * Returns Medals</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Medals?}
  * @example
  * halo.h5.metadata.medals().then( (medals) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.medals = function () {
    return this._http.queryAPI('/metadata/h5/metadata/medals')
  }

  /**
  * Returns Playlists</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Playlists?}
  * @example
  * halo.h5.metadata.playlists().then( (playlists) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playlists = function () {
    return this._http.queryAPI('/metadata/h5/metadata/playlists')
  }

  /**
  * Returns Requisition</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Requisition?}
  * @param {string} - ID of Requisition
  * @example
  * halo.h5.metadata.requisition().then( (requisition) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.requisition = function (id) {
    return this._http.queryAPI(`/metadata/h5/metadata/requisitions/${id}`)
  }

  /**
  * Returns Requisition Pack</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Requisition-Pack?}
  * @param {string} - ID of Requisition Pack
  * @example
  * halo.h5.metadata.requisitionPack().then( (pack) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.requisitionPack = function (id) {
    return this._http.queryAPI(`/metadata/h5/metadata/requisition-packs/${id}`)
  }

  /**
  * Returns Seasons</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Seasons?}
  * @example
  * halo.h5.metadata.seasons().then( (seasons) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.seasons = function () {
    return this._http.queryAPI('/metadata/h5/metadata/seasons')
  }

  /**
  * Returns Skulls</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Skulls?}
  * @example
  * halo.h5.metadata.skulls().then( (skulls) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.skulls = function () {
    return this._http.queryAPI('/metadata/h5/metadata/skulls')
  }

  /**
  * Returns Spartan Ranks</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Spartan-Ranks?}
  * @example
  * halo.h5.metadata.spartanRanks().then( (ranks) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.spartanRanks = function () {
    return this._http.queryAPI('/metadata/h5/metadata/spartan-ranks')
  }

  /**
  * Returns Team Colors</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Team-Colors?}
  * @example
  * halo.h5.metadata.teamColors().then( (colors) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.teamColors = function () {
    return this._http.queryAPI('/metadata/h5/metadata/team-colors')
  }

  /**
  * Returns Vehicles</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Vehicles?}
  * @example
  * halo.h5.metadata.vehicles().then( (vehicles) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.vehicles = function () {
    return this._http.queryAPI('/metadata/h5/metadata/vehicles')
  }

  /**
  * Returns Weapons</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/Halo-5-Weapons?}
  * @example
  * halo.h5.metadata.weapons().then( (weapons) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.weapons = function () {
    return this._http.queryAPI('/metadata/h5/metadata/weapons')
  }
}
