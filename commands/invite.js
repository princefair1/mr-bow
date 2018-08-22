const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if (message.channel.type === 'dm') return;
    let serverembed = new Discord.RichEmbed()
    .addField("**Invite BOT**", "[Invite](https://discordapp.com/oauth2/authorize?client_id=468817067827527680&scope=bot&permissions=2146958591)")
    .setColor("#00B6CB")
    .setFooter(`©BlackSweet V0.3.5`)
    message.channel.send(serverembed);
}