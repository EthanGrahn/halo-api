var httpWrapper = require("../httpWrapper.js");

/** Creates a metadata object
* @exports h5/stats
* @constructor
*/
module.exports = function stats(API_KEY){

  /** Initializes a new httpWrapper with API Key */
  this._http = new httpWrapper(API_KEY);

  /**
  * Returns Leaderboard for Player CSR.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b35}
  * @param {string} - Season ID
  * @param {string} - Playlist ID
  * @param {number} - Count (default 200)
  * @example
  * halo.h5.stats.playerCSR("seasonID", "playlistID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.playerCSR = function(seasonID, playlistID, count = 200){
    return this._http.queryAPI('/stats/h5/player-leaderboards/csr/' + seasonID + '/' + playlistID + '?count=' + count);
  }

  /**
  * Returns Match Events.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b36}
  * @param {string} - Match ID
  * @example
  * halo.h5.stats.matchEvents("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.matchEvents = function(matchID){
    return this._http.queryAPI('/stats/h5/matches/' + matchID + '/events');
  }

  /**
  * Returns Match Result Arena.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b37}
  * @param {string} - Match ID
  * @example
  * halo.h5.stats.matchResultArena("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.matchResultArena = function(matchID){
    return this._http.queryAPI('/stats/h5/arena/matches/' + matchID);
  }

  /**
  * Returns Match Result Campaign.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b38}
  * @param {string} - Match ID
  * @example
  * halo.h5.stats.matchResultCampaign("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.matchResultCampaign = function(matchID){
    return this._http.queryAPI('/stats/h5/campaign/matches/' + matchID);
  }

  /**
  * Returns Match Result Custom.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b39}
  * @param {string} - Match ID
  * @example
  * halo.h5.stats.matchResultCustom("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.matchResultCustom = function(matchID){
    return this._http.queryAPI('/stats/h5/custom/matches/' + matchID);
  }

  /**
  * Returns Match Result Warzone.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b3a}
  * @param {string} - Match ID
  * @example
  * halo.h5.stats.matchResultWarzone("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.matchResultWarzone = function(matchID){
    return this._http.queryAPI('/stats/h5/warzone/matches/' + matchID);
  }

  /**
  * Returns Player Match History.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b3b}
  * @param {string} - Gamertag of Player
  * @param {string} - Modes (arena, campaign, custom, or warzone) Comma separated. (default all)
  * @param {number} - Start index (default 0)
  * @param {number} - Count (default 25)
  * @example
  * halo.h5.stats.playerMatchHistory ("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.playerMatchHistory = function(player, modes='arena,campaign,custom,warzone', start=0, count=25){
    return this._http.queryAPI('/stats/h5/players/' + player + '/matches?modes=&start=&count=');
  }

  /**
  * Returns Player Service Records - Arena.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b3c}
  * @param {string} - Gamertags of players (comma separated)
  * @param {string} - Season ID (default current season)
  * @example
  * halo.h5.stats.playerServiceRecordsArena("googlrr").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.playerServiceRecordsArena = function(player, seasonID=''){
    if (seasonID === ''){
      return this._http.queryAPI('/stats/h5/servicerecords/arena?players=' + player);
    } else {
      return this._http.queryAPI('/stats/h5/servicerecords/arena?players=' + player + '&seasonId=' + seasonID);
    }
  }

  /**
  * Returns Player Service Records - Campaign.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b3d}
  * @param {string} - Gamertags of players (comma separated)
  * @example
  * halo.h5.stats.playerServiceRecordsCampaign("googlrr").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.playerServiceRecordsCampaign = function(player){
    return this._http.queryAPI('/stats/h5/servicerecords/campaign?players=' + player);
  }

  /**
  * Returns Player Service Records - Custom.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b3e}
  * @param {string} - Gamertags of players (comma separated)
  * @example
  * halo.h5.stats.playerServiceRecordsCustom("googlrr").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.playerServiceRecordsCustom = function(player){
    return this._http.queryAPI('/stats/h5/servicerecords/custom?players=' + player);
  }

  /**
  * Returns Player Service Records - Warzone.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b3f}
  * @param {string} - Gamertags of players (comma separated)
  * @example
  * halo.h5.stats.playerServiceRecordsWarzone("googlrr").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.playerServiceRecordsWarzone = function(player){
    return this._http.queryAPI('/stats/h5/servicerecords/warzone?players=' + player);
  }

  /**
  * Returns PC - Match Result - Custom.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b40}
  * @param {string} - Match ID
  * @example
  * halo.h5.stats.PCMatchResultCustom("matchID").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.PCMatchResultCustom = function(matchID){
    return this._http.queryAPI('/stats/h5pc/custom/matches/' + matchID);
  }

  /**
  * Returns PC - Player Match History.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b41}
  * @param {string} - Players Gamertags
  * @param {string} - Modes (arena, campaign, custom, or warzone) (default all) Comma separated
  * @param {number} - Start index (default 0)
  * @param {number} - Count (default 25)
  * @example
  * halo.h5.stats.PCPlayerMatchHistory("googlrr").then( (matches) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.PCPlayerMatchHistory = function(player, modes = 'arena,campaign,custom,warzone', start=0, count=25){
    return this._http.queryAPI('/stats/h5pc/players/' + player + '/matches?modes' + modes + '&start=' + start + '&count'+ count);
  }

  /**
  * Returns PC - Player Service Records - Custom.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b42}
  * @param {string} - Players Gamertags (comma separated)
  * @example
  * halo.h5.stats.PCPlayerServiceRecords("googlrr").then( (matches) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.prototype.PCPlayerServiceRecords = function(players){
    return this._http.queryAPI('/stats/h5pc/servicerecords/custom?players=' + players);
  }
}
