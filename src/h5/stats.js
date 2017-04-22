var httpWrapper = require("../httpWrapper.js");

function stats(API_KEY){
  this._http = new httpWrapper(API_KEY);
}

stats.prototype.playerCSR = function(seasonID, playlistID, count = 200){
  return this._http.queryAPI('/stats/h5/player-leaderboards/csr/' + seasonID + '/' + playlistID + '?count=' + count);
}

stats.prototype.matches = function(matchID){
  return this._http.queryAPI('/stats/h5/matches/' + matchID + '/events');
}

stats.prototype.matchResultArena = function(matchID){
  return this._http.queryAPI('/stats/h5/arena/matches/' + matchID);
}

stats.prototype.matchResultCampaign = function(matchID){
  return this._http.queryAPI('/stats/h5/campaign/matches/' + matchID);
}

stats.prototype.matchResultCustom = function(matchID){
  return this._http.queryAPI('/stats/h5/custom/matches/' + matchID);
}

stats.prototype.matchResultWarzone = function(matchID){
  return this._http.queryAPI('/stats/h5/warzone/matches/' + matchID);
}

stats.prototype.playerMatchHistory = function(player, modes='arena,campaign,custom,warzone', start=0, count=25){
  return this._http.queryAPI('/stats/h5/players/' + player + '/matches?modes=&start=&count=');
}

stats.prototype.playerServiceRecordsArena = function(player, seasonID=''){
  return this._http.queryAPI('/stats/h5/servicerecords/arena?players=' + player + '&seasonId=' + seasonID);
}

stats.prototype.playerServiceRecordsCampaign = function(player){
  return this._http.queryAPI('/stats/h5/servicerecords/campaign?players=' + player);
}

stats.prototype.playerServiceRecordsCustom = function(player){
  return this._http.queryAPI('/stats/h5/servicerecords/custom?players=' + player);
}

stats.prototype.playerServiceRecordsWarzone = function(player){
  return this._http.queryAPI('/stats/h5/servicerecords/warzone?players=' + player);
}

stats.prototype.PCMatchResultCustom = function(matchID){
  return this._http.queryAPI('/stats/h5pc/custom/matches/' + matchID);
}

stats.prototype.PCPlayerMatchHistory = function(player, modes = 'arena,campaign,custom,warzone', start=0, count=25){
  return this._http.queryAPI('/stats/h5pc/players/' + player + '/matches?modes' + modes + '&start=' + start + '&count'+ count);
}

stats.prototype.PCPlayerServiceRecords = function(players){
  return this._http.queryAPI('/stats/h5pc/servicerecords/custom?players=' + players);
}

module.exports = stats;
