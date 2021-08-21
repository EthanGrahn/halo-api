import { HttpWrapper } from '../../httpWrapper'

export enum MatchType {
  CUSTOM = 'custom',
  MATCHMAKING = 'matchmaking',
  ALL = ''
}

export class HaloWars2 {
  private httpWrapper: HttpWrapper
  private readonly STATS_PATH: string = '/stats/hw2'

  constructor(httpWrapper: HttpWrapper) {
    this.httpWrapper = httpWrapper
  }

  /**
  * Returns Match Events</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-Wars-2-Match-Events?}
  * @param {Number} matchID ID of match
  * @example
  * halo.stats.hw2.matchEvents(ID).then( (events) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
   matchEvents(matchID: string): Promise<any> {
    return this.httpWrapper.request(`${this.STATS_PATH}/matches/${matchID}/events`)
  }

  /**
  * Returns Match Results</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-Wars-2-Match-Result?}
  * @param {string} matchID ID of match
  * @example
  * halo.stats.hw2.matchResults(ID).then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  matchResult(matchID: string): Promise<any> {
    return this.httpWrapper.request(`${this.STATS_PATH}/matches/${matchID}`)
  }

  /**
  * Returns Player Campaign Progress</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-Wars-2-Player-Campaign-Progress?}
  * @param {String} player Gamertag of player
  * @example
  * halo.stats.hw2.playerCampaignProgress('player').then( (progress) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerCampaignProgress(player: string): Promise<any> {
    return this.httpWrapper.request(`${this.STATS_PATH}/players/${player}/campaign-progress`)
  }

  /**
  * Returns Player Match History</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-Wars-2-Player-Match-History?}
  * @param {string} player Gamertag of player
  * @param {MatchType} matchType Match Type (default all)
  * @param {number} start Index of match to start on (default 0)
  * @param {number} count Count of items to return (default 25)
  * @example
  * halo.stats.hw2.playerMatchHistory('MAX1MUM D3ATH', MatchType.MATCHMAKING, 0, 10).then( (matches) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerMatchHistory(player: string, matchType: MatchType = MatchType.ALL, start: number = 0, count: number = 25): Promise<any> {
    // prevent count from being less than 1
    count = count < 1 ? 1 : count
    // prevent index from being negative
    start = start < 0 ? 0 : start
    const matchQuery = matchType == MatchType.ALL ? '?' : `?matchType=${matchType}&`
    return this.httpWrapper.request(`${this.STATS_PATH}/players/${player}/matches${matchQuery}start=${start}&count=${count}`)
  }

  /**
  * Returns Player Playlist Ratings</br>
  * The ID that this wants can be obtained throuth the 'metadata' and then 'playlists'</br>
  * In the metadata JSON the ID is referred to as 'Identity' (NOT 'ID') and looks like a177b19a32164962abdc4653dfb7911b</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-Wars-2-Player-Playlist-Ratings?}
  * @param {string} playlistID ID of playlist
  * @param {string} players Comma-separated list or Array of players
  * @example
  * halo.stats.hw2.playerPlaylistRatings('a177b19a32164962abdc4653dfb7911b', 'player1,player2').then( (ratings) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerPlaylistRatings(playlistID: string, players: string | Array<string>): Promise<any> {
    // If the players input is a list, convert it to a comma separated list
    if (Array.isArray(players)) {
      players = players.join(',')
    }

    return this.httpWrapper.request(`${this.STATS_PATH}/playlist/${playlistID}/rating?players=${players}`)
  }

  /**
  * Returns Player Season Stats Summary</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-Wars-2-Player-Season-Stats-Summary?}
  * @param {String} player Gamertag of player
  * @param {String} seasonID ID of season
  * @example
  * halo.stats.hw2.playerSeasonStatsSummary(ID, players).then( (stats) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerSeasonStatsSummary(player: string, seasonID: string): Promise<any> {
    return this.httpWrapper.request(`${this.STATS_PATH}/players/${player}/stats/seasons/${seasonID}`)
  }

  /**
  * Returns Player Stats Summary</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-Wars-2-Player-Stats-Summary?}
  * @param {String} player Gamertag of player
  * @example
  * halo.stats.hw2.playerStatsSummary(player).then( (stats) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerStatsSummary(player: string): Promise<any> {
    return this.httpWrapper.request(`${this.STATS_PATH}/players/${player}/stats`)
  }

  /**
  * Returns Player XPs</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-Wars-2-Player-XPs?}
  * @param {String} players Gamertags of players
  * @example
  * halo.stats.hw2.playerXPs(player).then( (xps) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerXPs(players: string | Array<string>): Promise<any> {
    // If the players input is a list, convert it to a comma separated list
    if (Array.isArray(players)) {
      players = players.join(',')
    }
    
    return this.httpWrapper.request(`${this.STATS_PATH}/xp?players=${players}`)
  }
}
