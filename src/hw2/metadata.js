var httpWrapper = require("../httpWrapper.js");

/** Creates a metadata object
* @exports hw2/metadata
* @constructor
*/
module.exports = function metadata(API_KEY) {

  /** Initializes a new httpWrapper with API Key */
  this._http = new httpWrapper(API_KEY);

  /**
  * Returns Campaign Levels.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc435}
  * @returns {Promise} Promise of JSON from API
  */
  this.campaignLevels = function(){
    return this._http.queryAPI('/metadata/hw2/campaign-levels');
  }

  /**
  * Returns Campaign Logs.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc436}
  * @returns {Promise} Promise of JSON from API
  */
  this.campaignLogs = function(){
    return this._http.queryAPI('/metadata/hw2/campaign-logs');
  }

  /**
  * Returns Card Keywords.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ae45962109180bdcacc4eb}
  * @returns {Promise} Promise of JSON from API
  */
  this.cardKeywords = function(){
    return this._http.queryAPI('/metadata/hw2/card-keywords');
  }

  /**
  * Returns Cards.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc438}
  * @returns {Promise} Promise of JSON from API
  */
  this.cards = function(){
    return this._http.queryAPI('/metadata/hw2/cards');
  }

  /**
  * Returns CSR Designations.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ae45962109180bdcacc4ec}
  * @returns {Promise} Promise of JSON from API
  */
  this.csrDesignations = function(){
    return this._http.queryAPI('/metadata/hw2/csr-designations');
  }

  /**
  * Returns Difficulties.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc43a}
  * @returns {Promise} Promise of JSON from API
  */
  this.difficulties = function(){
    return this._http.queryAPI('/metadata/hw2/difficulties');
  }

  /**
  * Returns Game Object Categories.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc43b}
  * @returns {Promise} Promise of JSON from API
  */
  this.gameObjectCategories = function(){
    return this._http.queryAPI('/metadata/hw2/game-object-categories');
  }

  /**
  * Returns Game Objects.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc43c}
  * @returns {Promise} Promise of JSON from API
  */
  this.gameObjects = function(){
    return this._http.queryAPI('/metadata/hw2/game-objects');
  }

  /**
  * Returns Leader Powers.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc43d}
  * @returns {Promise} Promise of JSON from API
  */
  this.leaderPowers = function(){
    return this._http.queryAPI('/metadata/hw2/leader-powers');
  }

  /**
  * Returns Leaders.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc43e}
  * @returns {Promise} Promise of JSON from API
  */
  this.leaders = function(){
    return this._http.queryAPI('/metadata/hw2/leaders');
  }

  /**
  * Returns Maps.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc43f}
  * @returns {Promise} Promise of JSON from API
  */
  this.maps = function(){
    return this._http.queryAPI('/metadata/hw2/maps');
  }

  /**
  * Returns Packs.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc440}
  * @returns {Promise} Promise of JSON from API
  */
  this.packs = function(){
    return this._http.queryAPI('/metadata/hw2/packs');
  }

  /**
  * Returns Playlists.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc441}
  * @returns {Promise} Promise of JSON from API
  */
  this.playlists = function (){
    return this._http.queryAPI('/metadata/hw2/playlists');
  }

  /**
  * Returns Seasons.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc442}
  * @returns {Promise} Promise of JSON from API
  */
  this.seasons = function (){
    return this._http.queryAPI('/metadata/hw2/seasons');
  }

  /**
  * Returns Spartan Ranks.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc443}
  * @returns {Promise} Promise of JSON from API
  */
  this.spartanRanks = function (){
    return this._http.queryAPI('/metadata/hw2/spartan-ranks');
  }

  /**
  * Returns Techs.</br>
  * {@link https://developer.haloapi.com/docs/services/58ace18c21091812784ce8c5/operations/58ace18c2109180bdcacc444}
  * @returns {Promise} Promise of JSON from API
  */
  this.techs = function (){
    return this._http.queryAPI('/metadata/hw2/techs');
  }
}
