const { Client, GatewayIntentBits, Partials } = require('discord.js');
require(`colors`);
require('dotenv').config();

const client = new Client({
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: false,
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});


[`variables`, `extraEvents`, `checker`, `mongo_db`, `server`, 'slashCommand', 'events', `antiCrash`].forEach((handler) => {
  const file = require(`./src/handlers/${handler}`)
  if (file.execute) file.execute(client);
  else file(client);
});

  var newThreadid;
    var row;
    var newThreadOwnerId;

    client.on("threadCreate",async (newThread)=>{
      if(newThread.type == ChannelType.PublicThread){
        if (newThread.parentId == '1019653016120463400' || newThread.parentId == '1154436432769851560'){
          const hardwareRoleButton = new ButtonBuilder()
          .setCustomId('MentionHardwareRoleButton')
          .setLabel(`Mention @${Object.keys(expertRoles)[0]}`)
          .setStyle(ButtonStyle.Secondary)

          const artsRoleButton = new ButtonBuilder()
          .setCustomId('MentionArtsRoleButton')
          .setLabel(`Mention @${Object.keys(expertRoles)[1]}`)
          .setStyle(ButtonStyle.Secondary)

          const buildpcRoleButton = new ButtonBuilder()
          .setCustomId('buildpcRoleButton')
          .setLabel(`Build A PC`)
          .setStyle(ButtonStyle.Danger)

          newThreadid = newThread.id
          row = [new ActionRowBuilder().addComponents(hardwareRoleButton,artsRoleButton, buildpcRoleButton)]
          newThreadOwnerId = newThread.ownerId

          client.once("messageCreate", async (message)=>{
            if(message.channelId == newThreadid){
              await message.reply({
                content: "Please click the required button to mention the type of experts or services you want to get help with!",
                components: row,
                ephemeral: true
              }
            }

     })
    }
   }

})





 client.on("interactionCreate",async (interaction)=>{
  if(interaction.isButton() ){
    if(interaction.customId == 'MentionHardwareRoleButton' && interaction.user.id == newThreadOwnerId){

      await interaction.channel.send({
        content:`<@&${'1154436920424804402'}>, this guy needs help!`,
      }).then(()=>{
        interaction.message.delete()
      })
    }else if(interaction.customId == 'MentionArtsRoleButton' && interaction.user.id == newThreadOwnerId){
      
      await interaction.channel.send({
        content:`<@&${'1154437163044307114'}>, this guy needs help!`,
        
      }).then(()=>{
        interaction.message.delete()
      })  
  }else if(interaction.customId == 'buildpcRoleButton' && interaction.user.id == newThreadOwnerId){
    await interaction.channel.send({
      content:`Please mention if you want to build with a monitor or not. Does it include any other peripherals like a keyboard, mouse, etc.? Also, don't forget to mention your budget and the purpose (gaming, editing etc.). The <@&${'1154436920424804402'}> gang is on their way!`,
      
    }).then(()=>{
      interaction.message.delete()
    })  

  }else if(interaction.user.id != newThreadOwnerId){
      await interaction.reply({
        content:`You are not supposed to click this!`,
        ephemeral: true
      })
      return
    }
  }
 })

client.login(process.env.TOKEN).catch((error) => { console.log((error.message).bold.red) });

module.exports = client;