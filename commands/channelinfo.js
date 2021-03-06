const Discord = require('discord.js')

module.exports.config = { 
    name: "channelinfo",
    aliases: []
}

module.exports.run = async (client, message, args) => {
   const channel = message.channel || message.guild.channels.get(args[0]);

   if (!channel) {
       return message.reply('please enter a valid channel.');
   }
  
   const channelEmbed = new Discord.MessageEmbed()
           .setColor('#00E4FF')
           .setThumbnail(message.guild.iconURL)
           .setTitle('Channel Info')
           .addField(':arrow_right: Name', channel.type === 'dm' ? `<@${channel.recipient.username}>` : channel.name, true)
           .addField(':arrow_right: ID', channel.id, true)
           .addField(':arrow_right: Creation Date', channel.createdAt.toDateString(), true)
           .addField(':arrow_right: NSFW', channel.nsfw ? 'Yes' : 'No', true)
           .addField(':arrow_right: Category', channel.parent ? channel.parent.name : 'None', true)
           .addField(':arrow_right: Topic', channel.topic || 'None', true);

   message.channel.send(channelEmbed);
}