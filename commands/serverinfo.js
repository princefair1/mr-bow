const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if (message.channel.type === 'dm') return;
    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
     .setAuthor(message.guild.name, sicon)
     .setFooter(`©BlackSweet V0.3.5`)
     .setColor("#00B6CB")
     .setThumbnail(sicon)
     .addField("Server ID", message.guild.id, true)
     .addField("Server Name", message.guild.name, true)
     .addField("Server Owner", message.guild.owner.user.tag, true)
     .addField("Server Region", message.guild.region, true) 
     .addField("Channels", message.guild.channels.size, true)
     .addField("Members", message.guild.memberCount, true)
     .addField("Human", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
     .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
     .addField("Online", online.size, true)
     .addField("Roles", message.guild.roles.size, true)
     .addField(`Server Created`, `${day} - ${month} - ${year}`)
     message.channel.send(serverembed);
}