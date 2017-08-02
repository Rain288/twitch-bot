var tmi = require('tmi.js')
var main = require('./main')
var tmreq = require('./t_request')
var config = require('./config')

//Config
var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity:{
    username: config.username,
    password: "oauth:" + config.OAuth
  },
  channels: config.channels
};

var client = new tmi.client(options);
client.connect();

//Event Handlers
client.on("subscription", function(channel, username, method, message, userstate){
  client.say(channel, user['display-name'] + " thanks for subbing! <3");
})

client.on('resub', function(channel, username, months, message, userstate, methods){
  client.say(channel, user['display-name'] + " thanks for resubbing! <3 " + months + " months!");
})

client.on("chat", function(channel, user, message, self){
  if(message === "!discord"){
    main.discord(client, channel)
  } else if (message === "!playlist"){
    main.playlist(client, channel)
  } else if (message === "!sens"){
    main.sens(client, channel)
  } else if (message === "!social"){
    main.social(client, channel)
  } else if (message === "!uptime"){
    tmreq.uptime(client, channel)
  } else if(!user.mod && !user.subscriber && (user.badges == null || user.badges.broadcaster != 1)) {
    var urlc = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?")
    if(urlc.test(message)) {
      client.timeout(channel, user.username, 1)
      client.say(channel, user['display-name'] + " you don't have permission to paste links! Only the broadcaster/mods and subs do.")
    }
  }
})

client.on("connected", function(channel, user, message, self){
  setInterval(main.loopSocial, 1200000, client, config.main_channel);
  setTimeout(function(){setInterval(main.loopDiscord, 1200000, self, config.main_channel)}, 600000)
})

client.on("disconnected", function(reason){
  console.log(reason)
})
