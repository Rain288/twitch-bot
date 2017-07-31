var request = require('request')
var misc = require('./misc')
var config = require('./config')

module.exports = {
  isOnline: function(){
    var state = true;
    req(function(result){
      var info = result;
      if(info.stream == null){
        state = false;
      } else {
        state = true;
      }
      return state;
    });
    
  },
  uptime: function(client, channel){
    req(function(result){
      var info = result;
      if(info.stream == null){
        client.say(channel, "Channel offline!")
      } else {
        client.say(channel, misc.timediff(new Date(), info.stream.created_at))
      }
    });
  }
}

function req(cb){
  var opts = {
    url: 'https://api.twitch.tv/kraken/streams/' + config.main_channel_id,
    headers: {
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Authorization': 'OAuth ' + config.OAuth
    }
  }
  
  request(opts, function (error, response, body){
    if(!error && response.statusCode == 200){
      var info = JSON.parse(body);
      cb(info);
    }
  });
}