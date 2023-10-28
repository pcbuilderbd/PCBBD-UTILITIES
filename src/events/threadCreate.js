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
                .setLabel('Build A PC')
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

            collector.on('collect', (interaction) => {
              if (interaction.user.id === thread.ownerId && interaction.customId === 'pc') {
                const actionRowError = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('software')
                .setLabel('Software')
                .setStyle('Secondary'),

              new ButtonBuilder()
                .setCustomId('hardware')
                .setLabel('Hardware')
                .setStyle('Secondary')

                thread.send({ content: `:construction: **Oops! This feature is not available yet.** Try another option or mention a expert!`, components: [actionRowError] }).then((message) => {
            const collector2 = message.createMessageComponentCollector({ max: 1, time: 10000 });

            collector2.on('collect', (interaction) => {
              if (interaction.user.id === thread.ownerId && interaction.customId === 'software') {
                thread.send({ content: `<@&1154437163044307114> debug!` });
                message.delete();
              }
              if (interaction.user.id === thread.ownerId && interaction.customId === 'hardware') {
                thread.send({ content: `<@&1154436920424804402>, assemble!` });
                message.delete();
              }
            }
          })
            
                message.delete();
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