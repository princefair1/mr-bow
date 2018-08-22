const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
if(!message.member.roles.some(r=>["Master Rainbow"].includes(r.name))) return message.reply("Sorry, You don't have the premissions biatch");
      
      if(!message.member.hasPermission("MANAGE_GUILD") &&  !message.author.id === '335035386923581440') return message.channel.send({embed: { description: "ERROR: You need the permission BAN MEMBERS to do that.", color: 0xff0000 }});
      
      let channel;
      let announcement = await db.fetch(`announcement_${message.guild.id}`);
      let embed = new Discord.RichEmbed();
      
      const m = await message.channel.send(embed.setAuthor("Needing a little info...", message.author.avatarURL).setDescription("Please mention the channel you want to send the announcement in.").setColor("RANDOM"));
      const filter = m => m.author.id === message.author.id;
      message.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['time'] }).then(collected => {
       
      const c = collected.first();
        
      if(c.content.toLowerCase() === 'cancel' || c.content.toLowerCase() === 'stop') return message.channel.send('I have stopped waiting for messages!')
        
      if(c.content === announcement) channel = announcement;
      else if(announcement === null || announcement !== c.content) db.set(`announcement_${message.guild.id}`, c.content).then(channel = c.content)
      else return;
      
      m.channel.send(embed.setAuthor("Nearly done...", message.author.avatarURL).setDescription("What are you wanting to say?").setColor("RANDOM"));
      message.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['time'] }).then(collected2 => {
        
      const c2 = collected2.first();
      
      m.channel.send(embed.setAuthor("Last Question...", message.author.avatarURL).setDescription("Am I mentioning @everyone?").setColor("RANDOM"));
      message.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['time'] }).then(collected3 => {
        
      const c3 = collected3.first();
      if(c3.content.toLowerCase() == 'yes') {
        embed.setAuthor(`Announcement by ${message.author.tag}`, message.author.avatarURL)
        embed.setDescription(c2.content)
        embed.setColor("RANDOM")
        embed.setTimestamp()
        embed.setFooter("T-Pac A Community", bot.user.avatarURL)
        return message.guild.channels.get(channel.replace("<#", "").replace(">", "")).send("@everyone", {embed});
        
      } else if(c3.content.toLowerCase() == 'no') {
        embed.setAuthor(`Announcement by ${message.author.tag}`, message.author.avatarURL)
        embed.setDescription(c2.content)
        embed.setColor("RANDOM")
        embed.setTimestamp()
        embed.setFooter("T-Pac A Community", bot.user.avatarURL)
        return message.guild.channels.get(channel.replace("<#", "").replace(">", "")).send({embed});
      }
        
      })
      })    
    });
}

module.exports.help = {
  name: "say"
}