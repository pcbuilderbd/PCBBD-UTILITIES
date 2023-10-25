const { EmbedBuilder, MessageManager } = require('discord.js');
const settings = require(`${process.cwd()}/Assets/Config/settings`)
require(`colors`)
module.exports.slash = slash;

// function slash
function slash(client, interaction, error) {
  console.log(error.stack ? String(error.stack).red : String(error).red)
  interaction.reply({
    embeds: [new EmbedBuilder()
      .setColor(client.embed.color)
      .setAuthor({ name: `An error has occured! Try again later!`, url: "https://discord.gg/Mdh23bsrhp" })
    ],
    ephemeral: true
  }).catch((e) => {
    interaction.channel.send({
      content: `${interaction.user}`,
      embeds: [new EmbedBuilder()
        .setColor(client.embed.color)
        .setAuthor({ name: ` An error has occured! Try again later!`, url: "https://discord.gg/Mdh23bsrhp" })],
    }).then(m => setTimeout(() => m.delete(), 9000));
  })
  if (settings.COMMANDS_ERROR_LOGS && client.config.CHANNELS.ERROR_COMMAND_LOGS) client.channels.cache.get(client.config.CHANNELS.ERROR_COMMAND_LOGS).send({
    embeds: [
      new EmbedBuilder()
        .setColor("#00ffaa")
        .setTitle(`${client.emotes.MESSAGE.x} Error System [INTERACTION COMMANDS]`)
        .setDescription(`_An error has occured_.\n\n**Error Code:** \`${error.name}\`\n**Error Message:** \`${error.message}\`\n**Stack:** \`\`\`yml\n${error.stack}\`\`\``)
        .setFooter({ text: `Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB | CPU: ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% | Ping: ${Date.now() - interaction.createdTimestamp}ms` })
        .addFields([
          { name: "Guild", value: interaction.guild.name, inline: true },
          { name: "ID", value: interaction.guild.id, inline: true }
        ])
    ]
  });
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