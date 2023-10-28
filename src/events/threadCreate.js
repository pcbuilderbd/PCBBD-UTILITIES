const { ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
  async execute(client) {
    client.on("threadCreate", (thread) => {
      if(newThread.type == ChannelType.PublicThread){
        if (newThread.parentId == '1019653016120463400' || newThread.parentId == '1154436432769851560'){ 
          // Custom Buttons
          const actionRow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('pc')
                .setLabel('Build A PC')
                .setStyle('Danger'),

              new ButtonBuilder()
                .setCustomId('soft')
                .setLabel('Software')
                .setStyle('Primary'),

              new ButtonBuilder()
                .setCustomId('hard')
                .setLabel('Hardware')
                .setStyle('Primary')
            );

          const mentionAuthor = `<@${thread.ownerId}>`;

          thread.send({
            content: `Hello ${mentionAuthor}, please select one of the following to notify experts of that interest.`,
            components: [actionRow],
          }).then((message) => {
            const collector = message.createMessageComponentCollector({ max: 1, time: 10000 });

            collector.on('collect', (interaction) => {
              if (interaction.user.id === thread.ownerId && interaction.customId === 'pc') {
                thread.send({ content: `Experts come to the rescue!!` });
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
      })

      
    });
  },
};