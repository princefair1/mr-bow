const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPremission("SEND_MESSAGES")) return message.reply("Cunt go away")
        let embed = new Discord.RichEmbed()
            .setTitle("Hi")
            .addField("This command has been removed due it is shit", bot.user.avatarURL)
            .setFooter("T-Pac A Community", bot.user.avatarURL)
            .setColor("#RANDOM")
            .setTimestamp();

        message.channel.send(embed);
}

module.exports.help = {
    name: "eval"
}

//ACTUALLY FIXED :P
// NO BROKEN IDIOT