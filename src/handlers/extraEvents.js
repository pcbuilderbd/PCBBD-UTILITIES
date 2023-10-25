const boxConsole = require('box-console');
const config = require(`${process.cwd()}/Assets/Config/config`)
const settings = require(`${process.cwd()}/Assets/Config/settings`)
module.exports = {
  async execute(client) {

    let dtc = `Welcome to the Command Handler`.bold.red;
    let dtc_support = `Support Server:- ${`https://discord.gg/Mdh23bsrhp`.brightGreen}`
    let dtc_credits = `Coded By ${`DaTaklaCatto#2207`.brightCyan.bold}`;
    console.clear()
    boxConsole([dtc, dtc_support, dtc_credits]);

    // CONSOLE LOGGER
    client.logger = (data) => {
      var currentdate = new Date();
      let logstring = `${`${`${config.BOT_NAME}`.brightRed} ${`|`.brightMagenta} ${`${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()}`.brightGreen} ${`|`.brightMagenta} ${`${currentdate.toLocaleTimeString()}`.brightBlue} ${`|`.brightMagenta}`}`
      if (typeof data == "string") {
        console.log(logstring, data.split("\n").map(d => `${d}`.green).join(`\n${logstring} `))
      } else if (typeof data == "object") {
        console.log(logstring, JSON.stringify(data, null, 3).green)
      } else if (typeof data == "boolean") {
        console.log(logstring, String(data).cyan)
      } else {
        console.log(logstring, data)
      }
    };

    // AUTO KILL
    setInterval(() => {
      if (settings.REPL_SETTINGS.AUTO_KILL && settings.REPL_USER) {
        if (client.isReady() == false) {
          client.logger("Rate limit assumed, restarting")
          process.kill(1)
        }
      }
    }, 5000)


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