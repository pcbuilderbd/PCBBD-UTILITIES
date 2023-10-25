const set = require(`${process.cwd()}/Assets/Config/settings`)
module.exports = {
  async execute(ex) {
    if (!ex.config.TOKEN) {
      ex.logger("Enter The Bot Token".bold.red)
      process.exit(1)
    }
    if (!ex.config.MONGO_DB) {
      ex.logger("Enter MONGO_DB Token or Set it to false in Assets/Config/setting.js".bold.red)
      process.exit(1)
    }
    if (!ex.config.CLIENT_ID) {
      ex.logger("Enter client id".bold.red)
      process.exit(1)
    }
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