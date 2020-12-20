const HttpWrapper = require('../httpWrapper.js')

/** Creates a metadata object
* @exports h5/stats
* @constructor
*/
module.exports = function Stats (API_KEY) {
  /** Initializes a new HttpWrapper with API Key */
  this._http = new HttpWrapper(API_KEY)

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
  this.playerCSR = function (seasonID, playlistID, count = 200) {
    return this._http.queryAPI(`/stats/h5/player-leaderboards/csr/${seasonID}/${playlistID}?count=${count}`)
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
  this.matchEvents = function (matchID) {
    return this._http.queryAPI(`/stats/h5/matches/${matchID}/events`)
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
  this.matchResultArena = function (matchID) {
    return this._http.queryAPI(`/stats/h5/arena/matches/${matchID}`)
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
  this.matchResultCampaign = function (matchID) {
    return this._http.queryAPI(`/stats/h5/campaign/matches/${matchID}`)
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
  this.matchResultCustom = function (matchID) {
    return this._http.queryAPI(`/stats/h5/custom/matches/${matchID}`)
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
  this.matchResultWarzone = function (matchID) {
    return this._http.queryAPI(`/stats/h5/warzone/matches/${matchID}`)
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
  this.playerMatchHistory = function (player, modes = 'arena,campaign,custom,warzone', start = 0, count = 25) {
    return this._http.queryAPI(`/stats/h5/players/${player}/matches?modes=${modes}&start=${start}&count=${count}`)
  }

  /**
  * Returns Player Service Records - Arena.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b3c}
  * @param {string} - Gamertags of players (comma separated)
  * @param {string} - Season ID (default current season)
  * @example
  * halo.h5.stats.playerServiceRecordsArena("MAX1MUM D3ATH").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerServiceRecordsArena = function (player, seasonID = '') {
    if (seasonID === '') {
      return this._http.queryAPI(`/stats/h5/servicerecords/arena?players=${player}`)
    } else {
      return this._http.queryAPI(`/stats/h5/servicerecords/arena?players=${player}&seasonId=${seasonID}`)
    }
  }

  /**
  * Returns Player Service Records - Campaign.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b3d}
  * @param {string} - Gamertags of players (comma separated)
  * @example
  * halo.h5.stats.playerServiceRecordsCampaign("MAX1MUM D3ATH").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerServiceRecordsCampaign = function (player) {
    return this._http.queryAPI(`/stats/h5/servicerecords/campaign?players=${player}`)
  }

  /**
  * Returns Player Service Records - Custom.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b3e}
  * @param {string} - Gamertags of players (comma separated)
  * @example
  * halo.h5.stats.playerServiceRecordsCustom("MAX1MUM D3ATH").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerServiceRecordsCustom = function (player) {
    return this._http.queryAPI(`/stats/h5/servicerecords/custom?players=${player}`)
  }

  /**
  * Returns Player Service Records - Warzone.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b3f}
  * @param {string} - Gamertags of players (comma separated)
  * @example
  * halo.h5.stats.playerServiceRecordsWarzone("MAX1MUM D3ATH").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerServiceRecordsWarzone = function (player) {
    return this._http.queryAPI(`/stats/h5/servicerecords/warzone?players=${player}`)
  }

  /**
  * Returns PC - Match Result - Custom.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b40}
  * @param {string} - Match ID
  * @example
  * halo.h5.stats.matchResultCustomPC("matchID").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.matchResultCustomPC = function (matchID) {
    return this._http.queryAPI(`/stats/h5pc/custom/matches/${matchID}`)
  }

  /**
  * Returns PC - Player Match History.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b41}
  * @param {string} - Players Gamertags
  * @param {string} - Modes (arena, campaign, custom, or warzone) (default all) Comma separated
  * @param {number} - Start index (default 0)
  * @param {number} - Count (default 25)
  * @example
  * halo.h5.stats.playerMatchHistoryPC("MAX1MUM D3ATH").then( (matches) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerMatchHistoryPC = function (player, modes = 'arena,campaign,custom,warzone', start = 0, count = 25) {
    return this._http.queryAPI(`/stats/h5pc/players/${player}/matches?modes=${modes}&start=${start}&count=${count}`)
  }

  /**
  * Returns PC - Player Service Records - Custom.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/58acdf28e2f7f70db4854b42}
  * @param {string} - Players Gamertags (comma separated)
  * @example
  * halo.h5.stats.playerServiceRecordsPC("MAX1MUM D3ATH").then( (matches) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  this.playerServiceRecordsPC = function (players) {
    return this._http.queryAPI(`/stats/h5pc/servicerecords/custom?players=${players}`)
  }
}
