const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'credits',
  description: "Get information regarding creators of this server",
  usage: "/serverinfo",
  category: "info",
  userPerms: [''],
  botPerms: [''],
  cooldown: 30,
  guildOnly: false,
  ownerOnly: true,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction, guild) => {
    try {
      interaction.reply(`Sorry! This command is currently under maintenance!`)
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};