var httpWrapper = require("../httpWrapper.js");

/** Creates a stats object
* @exports hw2/stats
* @constructor
*/
module.exports = function stats(API_KEY){

  /** Initializes a new httpWrapper with API Key */
  this._http = new httpWrapper(API_KEY);

  /**
  * Returns Match Events</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b43}
  * @param {Number} ID of match
  * @example
  * halo.hw2.stats.matchEvents(ID).then( (events) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.matchEvents = function(matchID){
    return this._http.queryAPI(`/stats/hw2/matches/${matchID}/events`);
  }

  /**
  * Returns Match Results</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b44}
  * @param {Number} ID of match
  * @example
  * halo.hw2.stats.matchResults(ID).then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.matchResult = function(matchID){
    return this._http.queryAPI(`/stats/hw2/matches/${matchID}`);
  }

  /**
  * Returns Player Campaign Progress</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b45}
  * @param {String} Name of player
  * @example
  * halo.hw2.stats.playerCampaignProgress('player').then( (progress) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerCampaignProgress = function(player){
    return this._http.queryAPI('/stats/hw2/players/${player}/campaign-progress');
  }

  /**
  * Returns Player Match History</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b46}
  * @param {String} Name of player
  * @param {String} Match Type (default all)
  * @param {number} Index of match to start on (default 0)
  * @param {number} Count of items to return (default 25)
  * @example
  * halo.hw2.stats.playerMatchHistory('player', 'matchmaking', 0, 10).then( (matches) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerMatchHistory = function(player, matchType = '', start = 0, count = 25){
    return this._http.queryAPI(`/stats/hw2/players/${player}/matches?matchType=${matchType}&start=${start}&count=${count}`);
  }

  /**
  * Returns Player Playlist Ratings</br>
  * The ID that this wants can be obtained throuth the 'metadata' and then 'playlists'</br>
  * In the metadata JSON the ID is referred to as 'Identity' (NOT 'ID') and looks like a177b19a32164962abdc4653dfb7911b</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b47}
  * @param {String} ID of playlist
  * @param {String} Comma-separated list of players
  * @example
  * halo.hw2.stats.playerPlaylistRatings('a177b19a32164962abdc4653dfb7911b', 'player1,player2').then( (ratings) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerPlaylistRatings = function(playlistID, players){
    return this._http.queryAPI(`/stats/hw2/playlist/${playlistID}/rating?players=${players}`);
  }

  /**
  * Returns Player Season Stats Summary</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b48}
  * @param {String} Name of player
  * @param {String} ID of season
  * @example
  * halo.hw2.stats.playerSeasonStatsSummary(ID, players).then( (stats) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerSeasonStatsSummary = function(player, seasonID){
    return this._http.queryAPI(`/stats/hw2/players/${player}/stats/seasons/${seasonID}`);
  }

  /**
  * Returns Player Stats Summary</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b49}
  * @param {String} Name of player
  * @example
  * halo.hw2.stats.playerStatsSummary(player).then( (stats) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerStatsSummary = function(player){
    return this._http.queryAPI(`/stats/hw2/players/${player}/stats`);
  }

  /**
  * Returns Player XPs</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b4a}
  * @param {String} Name of player
  * @example
  * halo.hw2.stats.playerXPs(player).then( (xps) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerXPs = function(player){
    return this._http.queryAPI(`/stats/hw2/xp?players=${player}`);
  }
}
