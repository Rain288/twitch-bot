var request = require('request')
var misc = require('./misc')
var config = require('./config')

module.exports = {
  isOnline: function(){
    var state = true;
    var info = req();
    if(info.stream == null){
      state = false
    } else {
      state = true
    }
    return state
  },
  uptime: function(client, channel){
    var info = req();
    if(info.stream == null){
      client.say(channel, "Channel offline!")
    } else {
      client.say(channel, misc.timediff(new Date(), info.stream.created_at))
    }
  }
}

function req(){
  var info = {};
  var opts = {
    url: 'https://api.twitch.tv/kraken/streams/' + config.main_channel_id,
    headers: {
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Authorization': 'OAuth ' + config.OAuth
    }
  }
  function callback(error, response, body){
    if(!error && response.statusCode == 200){
      info = JSON.parse(body);
    }
  }
  request(opts, callback);
  return info;
}
