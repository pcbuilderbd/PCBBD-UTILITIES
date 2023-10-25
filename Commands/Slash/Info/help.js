const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'help',
  description: "Get the bot's commands and usage",
  usage: "/help",
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
  run: async (client, interaction) => {
    try {
      const embed = new EmbedBuilder()
        .setTitle('Here are a list of commands you can use:')
        .setFields([
          {
            name: "/ping",
            value: "Gives information regarding latency of the bot",
            inline: true
          },
          {
            name: "/serverinfo",
            value: "Get information regarding this server",
            inline: true
          },
          {
            name: "/credits",
            value: "Get information regarding creators of this server",
            inline: true
          }
        ])
        .setColor('#03fcdb')
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter({ text: client.user.tag })

      const actionRow = new ActionRowBuilder()
        .addComponents([
          new ButtonBuilder()
            .setLabel('Visit Our Website')
            .setURL("https://www.pcbuilderbd.com/")
            .setStyle(ButtonStyle.Link)
        ])
      interaction.reply({ embeds: [embed], components: [actionRow] })
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};