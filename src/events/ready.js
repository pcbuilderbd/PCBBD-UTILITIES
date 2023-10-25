const { version } = require(`discord.js`)
var AsciiTable = require('ascii-table')
var table = new AsciiTable()
table.setBorder('│', '─', " ", " ");
table.setTitle(`Bot is online!`)
module.exports = {
  async execute(client) {
    client.on("ready", () => {
      // Set Status
      client.user.setPresence({
        activities:
          [{ name: '/help - pcbuilderbd.com' }],
        status: 'online'
      });
      setTimeout(() => {
        client.logger((`Logged in as ${client.user.tag}!`).cyan.bold)
      }, 2000)
      // Rows
      table
        .addRow(`Bot Username`, client.user.tag)
        .addRow(`Guild(s)`, `${client.guilds.cache.size} Server(s)`)
        .addRow(`Member(s)`, `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Members`)
        .addRow(`Commands`, `${client.slashCommands.size} (Slash)`)
        .addRow(`Discord.JS Version`, `${version}`)
        .addRow(`Node.JS Version`, `${process.version}`)
        .addRow(`Memory`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`)
      setTimeout(() => { console.log(table.toString()) }, 3000)
    });
  }
}

/********************************************************
  @INFO
    Coded by: Nadid Wasique [DaTaklaCatto#2207]
  @INFO
    Website: https://nadid-wasique.nelify.app
    Discord: https://discord.gg/Mdh23bsrhp
  @COPYRIGHT
    Please mention me if you use this code <3
  @INFO
********************************************************/