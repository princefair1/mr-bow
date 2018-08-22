const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.roles.some(r=>["T-Pac Official"].includes(r.name))) return message.reply("Sorry, You don't have the premissions biatch");
    
    let toMessage = message.mentions.members.first();
    let messageToSend = args.slice(1).join(" ");

    let embed = new Discord.RichEmbed()
        .setDescription(`**${message.author.username} told me to send this message to you:**\n${messageToSend}`)
        .setColor("#FFFFFF");

    toMessage.send(embed);
    message.delete().catch();
}

module.exports.help = {
    name: "pm"
}