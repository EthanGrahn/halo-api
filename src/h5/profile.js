var httpWrapper = require("../httpWrapper.js");

/** Creates a profile object
* @exports h5/profile
* @constructor
*/
module.exports = function profile(API_KEY){

  /** Initializes a new httpWrapper with API Key */
  this._http = new httpWrapper(API_KEY);

  /**
  * Returns Emblem Image.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdc2e21091812784ce8c2/operations/58acdc2e2109180bdcacc404}
  * @param {string} - Player Gamertag
  * @param {number} - Size in pixels (default 256). Must be 95, 128, 190, 256, 512.
  * @example
  * halo.h5.profile.emblemImage("googlrr").then( (image) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.emblemImage = function(player, size = 256){
    return this._http.queryAPI('/profile/h5/profiles/' + player + '/emblem?size=' + size);
  }

  /**
  * Returns spartanImage.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdc2e21091812784ce8c2/operations/58acdc2e2109180bdcacc405}
  * @param {string} - Player Gamertag
  * @param {number} - Size in pixels (default 256). Must be 95, 128, 190, 256, 512.
  * @param {string} - Crop; Used to determined portion of image returned. (default 'full'). Must be 'full' or 'portrait'.
  * @example
  * halo.h5.profile.spartanImage("googlrr").then( (image) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.spartanImage = function(player, size = 256, crop = 'full'){
    return this._http.queryAPI('/profile/h5/profiles/' + player + '/spartan?size=' + size + 'crop=' + crop);
  }
}
