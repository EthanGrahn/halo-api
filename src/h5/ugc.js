var httpWrapper = require("../httpWrapper.js");

/** Creates a ugc object
* @exports h5/ugc
* @constructor
*/
module.exports = function ugc(API_KEY){

  /** Initializes a new httpWrapper with API Key */
  this._http = new httpWrapper(API_KEY);

  /**
  * Returns Player Game Variant.</br>
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40c}
  * @param {string} - Player
  * @param {string} - Variant (ID)
  * @example
  * halo.hw2.metadata.playerGameVariant('player', 'ID').then( (variant) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerGameVariant = function(player, variant){
    return this._http.queryAPI('/ugc/h5/players/' + player + '/gamevariants/' + variant);
  }

  /**
  * Returns Player Game Variants.</br>
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40d}
  * @param {string} - Player
  * @param {number} - Starting Index (Default 0)
  * @param {number} - Count (Default 100)
  * @param {number} - Sort (Default Modified)
  * @param {string} - Order (Default desc)
  * @example
  * halo.hw2.metadata.playerGameVariants('player', 0, 100, 'modified', 'desc').then( (variants) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerGameVariants = function(player, start = 0, count = 100, sort = 'modified', order = 'desc'){
    return this._http.queryAPI('/ugc/h5/players/' + player + '/gamevariants?start=' + start + '&count=' + count + '&sort=' + sort + '&order=' + order);
  }

  /**
  * Returns Player Map Variant.</br>
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40e}
  * @param {string} - Player
  * @param {string} - Variant ID
  * @example
  * halo.hw2.metadata.playerMapVariant('player', 'variantID').then( (variant) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerMapVariant = function(player, variant){
    return this._http.queryAPI('/ugc/h5/players/' + player + '/mapvariants/' + variant);
  }

  /**
  * Returns Player Map Variants.</br>
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40f}
  * @param {string} - Player
  * @param {number} - Starting Index (Default 0)
  * @param {number} - Count (Default 100)
  * @param {number} - Sort (Default Modified)
  * @param {string} - Order (Default desc)
  * @example
  * halo.hw2.metadata.playerMapVariants('player', 0, 100, 'modified', 'desc').then( (variants) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerMapVariants = function(player, start = 0, count = 25, sort = 'modified', order = 'desc'){
    return this._http.queryAPI('/ugc/h5/players/' + player + '/mapvariants?start=' + start + '&count=' + count + '&sort=' + sort + '&order=' + order);
  }
}
