const { InteractionType, ActionRowBuilder, ButtonBuilder } = require('discord.js'),
  hastebin = require('hastebin-gen');
module.exports = {
  async execute(client) {
    client.on('interactionCreate', interaction => {
      if (interaction.type !== InteractionType.ModalSubmit) return;
    })
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