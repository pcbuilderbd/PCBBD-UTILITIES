const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'serverinfo',
  description: "Get information regarding this server",
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

      const embed = new EmbedBuilder()
        .setTitle('PC Builder Bangladesh Discord Server')
        .setDescription(`This is the PC Builder Bangladesh Official Discord Server.\n\n __**Server Description:**__\nPC Builder Bangladesh is the first video based podcast regarding gaming, tech news, tutorials and PC builds etc.`)
        .addFields([
          {
            name: 'Server Created',
            value: `<t:1609516800:R>`,
            inline: true
          },
          {
            name: 'Server Owner',
            value: '[PC Builder BD](https://google.com/)',
            inline: true
          },
          {
            name: 'Server Members',
            value: `${interaction.guild.memberCount}`,
            inline: true
          },
          {
            name: 'Server Creator',
            value: 'Type **/credits** to find out.'
          }
        ])
        .setColor('#2b2d31')
        .setTimestamp()
        .setThumbnail('https://media.discordapp.net/attachments/992077992316641341/1009780961317240842/PC.png?ex=6543834e&is=65310e4e&hm=d0d2fa1be9200755820052ccb884ec2e872c9496df8bb85aa9ff0a16fa19bdce&=&width=259&height=259')
        .setFooter({ text: client.user.tag })

      const actionRow = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setLabel("Website")
            .setURL("https://www.pcbuilderbd.com/")
            //.setEmoji("<:pcb_bd:799851716400906280>")
            .setStyle(ButtonStyle.Link),

          new ButtonBuilder()
            .setLabel("Youtube")
            .setURL("https://www.youtube.com/c/PCBuilderBangladesh/")
            //.setEmoji("<:pcb_bd:799851716400906280>")
            .setStyle(ButtonStyle.Link),

          new ButtonBuilder()
            .setLabel("Facebook")
            .setURL("https://goo.gl/N3fMUV")
            //.setEmoji("<:pcb_bd:799851716400906280>")
            .setStyle(ButtonStyle.Link),
        );

      interaction.reply({ embeds: [embed], components: [actionRow], ephemeral: true })
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};