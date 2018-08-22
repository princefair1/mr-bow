const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if (message.channel.type === 'dm') return;
    let user = message.mentions.users.first() || message.author;
   
   let embed = new Discord.RichEmbed()
   .setColor("#00B6CB")
   .setAuthor(`${user.username}`)
   .setImage(user.displayAvatarURL)
   .setFooter(`©BlackSweet V0.3.5`)
   message.channel.send(embed) 
  }