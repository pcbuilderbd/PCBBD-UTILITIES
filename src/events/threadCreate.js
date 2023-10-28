const { ActionRowBuilder, ButtonBuilder, ChannelType } = require('discord.js');

module.exports = {
  async execute(client) {
    client.on("threadCreate", async (thread) => {
      if (thread.type === ChannelType.PublicThread) {
        if (thread.parentId === '1019653016120463400' || thread.parentId == '1154436432769851560') {
          const actionRow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('pc')
                .setLabel('Computer')
                .setStyle('Danger'),

              new ButtonBuilder()
                .setCustomId('soft')
                .setLabel('Software')
                .setStyle('Secondary'),

              new ButtonBuilder()
                .setCustomId('hard')
                .setLabel('Hardware')
                .setStyle('Secondary')
            );

          thread.send({
            content: `Hello <@${thread.ownerId}>, please select one of the following to notify experts of that interest.`,
            components: [actionRow],
          }).then((message) => {
            const collector = message.createMessageComponentCollector({ max: 1, time: 10000 });

            collector.on('collect', async(interaction) => {
              if (interaction.user.id === thread.ownerId && interaction.customId === 'pc') {
                interaction.reply({ content: `Dont!`, ephemeral: true })
                return
              }
              if (interaction.user.id === thread.ownerId && interaction.customId === 'soft') {
                thread.send({ content: `<@&1154437163044307114> debug!` });
                message.delete();
              }
              if (interaction.user.id === thread.ownerId && interaction.customId === 'hard') {
                thread.send({ content: `<@&1154436920424804402>, assemble!` });
                message.delete();
              }
            });
          });
        }
      }
    });
  }
}