# twitch_bot
A very simple twitch bot I made for a friend's stream using tmi.js .

## How to use
* Clone the repo and then `node app.js`
* External modules used that should be installed with NPM are `request` and `tmi.js`
* Customize `example_config.js` and when you're done rename it to `config.js`
And that's about it

### Features
* Advertises every 10 minutes, either a discord server or a twitter link
* Auto-purges links from non-subs and non-mods (read: plebs). Reminder to self to implement an !permit system
* Has simple commands like `!discord`, `!playlist`, `!social`, `!sens` which should be self explanatory
* Has an `!uptime` command. I am not sure if my execution is the most optimal, so if anyone reading this can correct me I'd appreciate it.
