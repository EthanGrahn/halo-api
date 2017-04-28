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
  metadata.prototype.campaignMissions = function(){
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
  metadata.prototype.commendations = function(){
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
  metadata.prototype.csrDesignations = function(){
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
  metadata.prototype.enemies = function(){
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
  metadata.prototype.flexibleStats = function(){
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
  metadata.prototype.gameBaseVariants = function(){
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
  metadata.prototype.gameVariants = function(id){
    return this._http.queryAPI('/metadata/h5/metadata/game-variants/' + id);
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
  metadata.prototype.impulses = function(){
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
  metadata.prototype.mapVariant = function(id){
    return this._http.queryAPI('/metadata/h5/metadata/map-variants/' + id);
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
  metadata.prototype.maps = function(){
    return this._http.queryAPI('/metadata/h5/metadata/maps');
  }

  /**
  * Returns medals</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc42b}
  * @example
  * halo.h5.metadata.medals().then( (maps) => {
  * //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  metadata.prototype.medals = function(){
    return this._http.queryAPI('/metadata/h5/metadata/medals');
  }

  metadata.prototype.playlists = function(){
    return this._http.queryAPI('/metadata/h5/metadata/playlists');
  }

  metadata.prototype.requisition = function(id){
    return this._http.queryAPI('/metadata/h5/metadata/requisitions/' + id);
  }

  metadata.prototype.requisitionPack = function(id){
    return this._http.queryAPI('/metadata/h5/metadata/requisition-packs/' + id);
  }

  metadata.prototype.seasons = function(){
    return this._http.queryAPI('/metadata/h5/metadata/seasons');
  }

  metadata.prototype.skulls = function(){
    return this._http.queryAPI('/metadata/h5/metadata/skulls');
  }

  metadata.prototype.spartanRanks = function(){
    return this._http.queryAPI('/metadata/h5/metadata/spartan-ranks');
  }

  metadata.prototype.teamColors = function(){
    return this._http.queryAPI('/metadata/h5/metadata/team-colors');
  }

  metadata.prototype.vehicles = function(){
    return this._http.queryAPI('/metadata/h5/metadata/vehicles');
  }

  metadata.prototype.weapons = function(){
    return this._http.queryAPI('/metadata/h5/metadata/weapons');
  }
}
