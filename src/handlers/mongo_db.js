const settings = require(`${process.cwd()}/Assets/Config/settings`);
const { mongoose } = require("mongoose");
require("colors")
module.exports = {
  async execute(client) {
    if (settings.ENABLE_MONGODB) {
      try {
        mongoose.connect(client.config.MONGO_DB, {
          autoIndex: false,
          maxPoolSize: 10,
          serverSelectionTimeoutMS: 5000,
          socketTimeoutMS: 45000,
          family: 4,
        }).then(() => client.logger("Connected to MongoDB".bold))
          .catch((err) => console.error("MongoDB ❌\n", err));
      } catch (e) {
        console.log(error.stack ? String(error.stack).red : String(error).red)
      }
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