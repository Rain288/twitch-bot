var config = require('./config')
var check = require('./t_request')

module.exports = {
  discord: function(client, channel){
    client.say(channel, config.discord)
  },
  playlist: function(client, channel){
    client.say(channel, "Spotify Playlist: " + config.spotify)
  },
  sens: function(client, channel){
    client.say(channel, config.sens)
  },
  social: function(client, channel){
    client.say(channel, "Twitter: " + config.twitter);
  },
  loopDiscord: function(client, channel){
    console.log("loopDiscord triggered");
    if(check.isOnline()){
      client.say(channel, "Join my Discord server: " + config.discord);
    }
  },
  loopSocial: function(client, channel){
    console.log("loopSocial triggered");
    if(check.isOnline()){
      console.log("Online!");
      client.say(channel, "Remember to follow the channel to see when I go live! Also follow me on Twitter: " + config.twitter)
    } else {
      console.log("Offline!");
    }
  }
};
