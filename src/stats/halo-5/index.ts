import { HttpWrapper } from '../../httpWrapper'

export enum Mode {
  CUSTOM = 'custom',
  CUSTOM_LOCAL = 'customlocal',
  ARENA = 'arena',
  WARZONE = 'warzone',
  CAMPAIGN = 'campaign',
  ALL = ''
}

export class Halo5 {
  private httpWrapper: HttpWrapper = undefined
  private readonly STATS_PATH_CONSOLE: string = '/stats/h5'
  private readonly STATS_PATH_PC: string = '/stats/h5pc'

  constructor(httpWrapper: HttpWrapper) {
    this.httpWrapper = httpWrapper
  }

  /**
  * Returns Leaderboard for Player CSR.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Leaderboard-Player-CSR?}
  * @param {string} seasonID Season ID
  * @param {string} playlistID Playlist ID
  * @param {number} count Count (default 200)
  * @example
  * halo.stats.halo5.playerCSR("seasonID", "playlistID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerCSR(seasonID: string, playlistID: string, count: number = 200): Promise<any> {
    count = count < 1 ? 1 : count

    return this.httpWrapper.request(`${this.STATS_PATH_CONSOLE}/player-leaderboards/csr/${seasonID}/${playlistID}?count=${count}`)
  }

  /**
  * Returns Match Events.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Match-Events?}
  * @param {string} matchID Match ID
  * @example
  * halo.stats.halo5.matchEvents("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  matchEvents(matchID: string): Promise<any> {
    return this.httpWrapper.request(`${this.STATS_PATH_CONSOLE}/matches/${matchID}/events`)
  }

  /**
  * Returns Match Result Arena.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Match-Result-Arena?}
  * @param {string} matchID Match ID
  * @example
  * halo.stats.halo5.matchResultArena("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  matchResultArena(matchID: string): Promise<any> {
    return this.httpWrapper.request(`${this.STATS_PATH_CONSOLE}/arena/matches/${matchID}`)
  }

  /**
  * Returns Match Result Campaign.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Match-Result-Campaign?}
  * @param {string} matchID Match ID
  * @example
  * halo.stats.halo5.matchResultCampaign("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  matchResultCampaign(matchID: string): Promise<any> {
    return this.httpWrapper.request(`${this.STATS_PATH_CONSOLE}/campaign/matches/${matchID}`)
  }

  /**
  * Returns Match Result Custom.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Match-Result-Custom?}
  * @param {string} matchID Match ID
  * @example
  * halo.stats.halo5.matchResultCustom("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  matchResultCustom(matchID: string): Promise<any> {
    return this.httpWrapper.request(`${this.STATS_PATH_CONSOLE}/custom/matches/${matchID}`)
  }

  /**
  * Returns Match Result Warzone.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Match-Result-Warzone?}
  * @param {string} matchID Match ID
  * @example
  * halo.stats.halo5.matchResultWarzone("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  matchResultWarzone(matchID: string): Promise<any> {
    return this.httpWrapper.request(`${this.STATS_PATH_CONSOLE}/warzone/matches/${matchID}`)
  }

  /**
  * Returns Player Match History.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Player-Match-History?}
  * @param {string} player Gamertag of Player
  * @param {Mode} modes Modes: arena, campaign, custom, or warzone. (default all)
  * @param {number} start Start index (default 0)
  * @param {number} count Count (default 25)
  * @example
  * halo.stats.halo5.playerMatchHistory ("matchID").then( (results) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerMatchHistory(player: string, modes: Mode | Array<Mode> = Mode.ALL, start: number = 0, count: number = 25): Promise<any> {
    start = start < 0 ? 0 : start
    count = count < 1 ? 1 : count    
    let modeString: string = ''

    // If the modes input is an array, convert it to a comma separated list
    if (Array.isArray(modes)) {
      let modeArray = []
      modes.forEach(element => {
        modeArray.push(element)
      });
      modeString = modeArray.join(',')
    } else {
      modeString = modes
    }

    let modeQuery: string = modes == Mode.ALL ? '?' : `?modes=${modeString}&`

    return this.httpWrapper.request(`${this.STATS_PATH_CONSOLE}/players/${player}/matches${modeQuery}start=${start}&count=${count}`)
  }

  /**
  * Returns Player Service Records - Arena.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Player-Service-Records-Arena?}
  * @param {string} players Gamertags of players (comma separated)
  * @param {string} seasonID Season ID (default current season) (optional)
  * @example
  * halo.stats.halo5.playerServiceRecordsArena("MAX1MUM D3ATH").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerServiceRecordsArena(players: string | Array<string>, seasonID: string = ''): Promise<any> {
    // If the players input is an array, convert it to a comma separated list
    if (Array.isArray(players)) {
      players = players.join(',')
    }

    return this.httpWrapper.request(`${this.STATS_PATH_CONSOLE}/servicerecords/arena?players=${players}${seasonID === '' ? '' : `&seasonId=${seasonID}`}`)
  }

  /**
  * Returns Player Service Records - Campaign.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Player-Service-Records-Campaign?}
  * @param {string} players Gamertags of players (comma separated)
  * @example
  * halo.stats.halo5.playerServiceRecordsCampaign("MAX1MUM D3ATH").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerServiceRecordsCampaign(players: string | Array<string>): Promise<any> {
    // If the players input is an array, convert it to a comma separated list
    if (Array.isArray(players)) {
      players = players.join(',')
    }

    return this.httpWrapper.request(`${this.STATS_PATH_CONSOLE}/servicerecords/campaign?players=${players}`)
  }

  /**
  * Returns Player Service Records - Custom.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Player-Service-Records-Custom?}
  * @param {string} players Gamertags of players (comma separated)
  * @example
  * halo.stats.halo5.playerServiceRecordsCustom("MAX1MUM D3ATH").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerServiceRecordsCustom(players: string | Array<string>): Promise<any> {
    // If the players input is an array, convert it to a comma separated list
    if (Array.isArray(players)) {
      players = players.join(',')
    }

    return this.httpWrapper.request(`${this.STATS_PATH_CONSOLE}/servicerecords/custom?players=${players}`)
  }

  /**
  * Returns Player Service Records - Warzone.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-Player-Service-Records-Warzone?}
  * @param {string} players Gamertags of players (comma separated)
  * @example
  * halo.stats.halo5.playerServiceRecordsWarzone('MAX1MUM D3ATH').then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerServiceRecordsWarzone(players: string | Array<string>): Promise<any> {
    // If the players input is an array, convert it to a comma separated list
    if (Array.isArray(players)) {
      players = players.join(',')
    }

    return this.httpWrapper.request(`${this.STATS_PATH_CONSOLE}/servicerecords/warzone?players=${players}`)
  }

  /**
  * Returns PC - Match Result - Custom.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-PC-Match-Result-Custom?}
  * @param {string} matchID Match ID
  * @example
  * halo.stats.halo5.matchResultCustomPC("matchID").then( (records) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  matchResultCustomPC(matchID: string): Promise<any> {
    return this.httpWrapper.request(`${this.STATS_PATH_PC}/custom/matches/${matchID}`)
  }

  /**
  * Returns PC - Player Match History.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-PC-Player-Match-History?}
  * @param {string} player Gamertag of player
  * @param {string} modes (arena, campaign, custom, or warzone) (default all) Comma separated
  * @param {number} start Start index (default 0)
  * @param {number} count Number of results to return (default 25)
  * @example
  * halo.stats.halo5.playerMatchHistoryPC("MAX1MUM D3ATH").then( (matches) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerMatchHistoryPC(player: string, modes: Mode | Array<Mode> = Mode.ALL, start = 0, count = 25): Promise<any> {
    let modeString: string = ''

    // If the modes input is an array, convert it to a comma separated list
    if (Array.isArray(modes)) {
      let modeArray = []
      modes.forEach(element => {
        modeArray.push(element)
      });
      modeString = modeArray.join(',')
    } else {
      modeString = modes
    }

    let modeQuery: string = modes == Mode.ALL ? '?' : `?modes=${modeString}&`

    return this.httpWrapper.request(`${this.STATS_PATH_PC}/players/${player}/matches${modeQuery}start=${start}&count=${count}`)
  }

  /**
  * Returns PC - Player Service Records - Custom.</br>
  * {@link https://developer.haloapi.com/docs/services/58acdf27e2f7f71ad0dad84b/operations/Halo-5-PC-Player-Service-Records-Custom?}
  * @param {string} players Players Gamertags (comma separated)
  * @example
  * halo.stats.halo5.playerServiceRecordsPC('MAX1MUM D3ATH').then( (matches) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerServiceRecordsPC(players: string | Array<string>): Promise<any> {
    // If the players input is an array, convert it to a comma separated list
    if (Array.isArray(players)) {
      players = players.join(',')
    }

    return this.httpWrapper.request(`${this.STATS_PATH_PC}/servicerecords/custom?players=${players}`)
  }
}
