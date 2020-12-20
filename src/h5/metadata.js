var httpWrapper = require("../httpWrapper.js");

/** Creates a metadata object
* @exports h5/metadata
* @constructor
*/
module.exports = function metadata(API_KEY){

  /** Initializes a new httpWrapper with API Key */
  this._http = new httpWrapper(API_KEY);

  /**
  * Returns Campaign Missions </br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc421}
  * @example
  * halo.h5.metadata.campaignMissions().then( (missions) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.campaignMissions = function(){
    return this._http.queryAPI('/metadata/h5/metadata/campaign-missions');
  }

  /**
  * Returns Commendations </br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc422}
  * @example
  * halo.h5.metadata.commendations().then( (commendations) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.commendations = function(){
    return this._http.queryAPI('/metadata/h5/metadata/commendations');
  }

  /**
  * Returns CSR Designations </br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc423}
  * @example
  * halo.h5.metadata.csrDesignations().then( (designations) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.csrDesignations = function(){
    return this._http.queryAPI('/metadata/h5/metadata/csr-designations');
  }

  /**
  * Returns Enemies </br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc424}
  * @example
  * halo.h5.metadata.enemies().then( (enemies) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.enemies = function(){
    return this._http.queryAPI('/metadata/h5/metadata/enemies');
  }

  /**
  * Returns Flexible Stats</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc425}
  * @example
  * halo.h5.metadata.flexibleStats().then( (stats) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.flexibleStats = function(){
    return this._http.queryAPI('/metadata/h5/metadata/flexible-stats');
  }

  /**
  * Returns Game Base Variants</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc426}
  * @example
  * halo.h5.metadata.gameBaseVariants().then( (variants) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.gameBaseVariants = function(){
    return this._http.queryAPI('/metadata/h5/metadata/game-base-variants');
  }

  /**
  * Returns Game Variants</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc427}
  * @example
  * halo.h5.metadata.gameVariants().then( (variants) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.gameVariants = function(id){
    return this._http.queryAPI(`/metadata/h5/metadata/game-variants/${id}`);
  }

  /**
  * Returns Impulses</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc428}
  * @example
  * halo.h5.metadata.impulses().then( (impulses) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.impulses = function(){
    return this._http.queryAPI('/metadata/h5/metadata/impulses');
  }

  /**
  * Returns Map Variant</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc429}
  * @example
  * halo.h5.metadata.mapVariant().then( (variant) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.mapVariant = function(id){
    return this._http.queryAPI(`/metadata/h5/metadata/map-variants/${id}`);
  }

  /**
  * Returns Maps</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc42a}
  * @example
  * halo.h5.metadata.maps().then( (maps) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.maps = function(){
    return this._http.queryAPI('/metadata/h5/metadata/maps');
  }

  /**
  * Returns Medals</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc42b}
  * @example
  * halo.h5.metadata.medals().then( (medals) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.medals = function(){
    return this._http.queryAPI('/metadata/h5/metadata/medals');
  }

  /**
  * Returns Playlists</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc42c}
  * @example
  * halo.h5.metadata.playlists().then( (playlists) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playlists = function(){
    return this._http.queryAPI('/metadata/h5/metadata/playlists');
  }

  /**
  * Returns Requisition</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc42d}
  * @param {string} - ID of Requisition
  * @example
  * halo.h5.metadata.requisition().then( (requisition) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.requisition = function(id){
    return this._http.queryAPI(`/metadata/h5/metadata/requisitions/${id}`);
  }

  /**
  * Returns Requisition Pack</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc42e}
  * @param {string} - ID of Requisition Pack
  * @example
  * halo.h5.metadata.requisitionPack().then( (pack) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.requisitionPack = function(id){
    return this._http.queryAPI(`/metadata/h5/metadata/requisition-packs/${id}`);
  }

  /**
  * Returns Seasons</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc42f}
  * @example
  * halo.h5.metadata.seasons().then( (seasons) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.seasons = function(){
    return this._http.queryAPI('/metadata/h5/metadata/seasons');
  }

  /**
  * Returns Skulls</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc430}
  * @example
  * halo.h5.metadata.skulls().then( (skulls) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.skulls = function(){
    return this._http.queryAPI('/metadata/h5/metadata/skulls');
  }

  /**
  * Returns Spartan Ranks</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc431}
  * @example
  * halo.h5.metadata.spartanRanks().then( (ranks) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.spartanRanks = function(){
    return this._http.queryAPI('/metadata/h5/metadata/spartan-ranks');
  }

  /**
  * Returns Team Colors</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc432}
  * @example
  * halo.h5.metadata.teamColors().then( (colors) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.teamColors = function(){
    return this._http.queryAPI('/metadata/h5/metadata/team-colors');
  }

  /**
  * Returns Vehicles</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc433}
  * @example
  * halo.h5.metadata.vehicles().then( (vehicles) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.vehicles = function(){
    return this._http.queryAPI('/metadata/h5/metadata/vehicles');
  }

  /**
  * Returns Weapons</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc434}
  * @example
  * halo.h5.metadata.weapons().then( (weapons) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.weapons = function(){
    return this._http.queryAPI('/metadata/h5/metadata/weapons');
  }
}
