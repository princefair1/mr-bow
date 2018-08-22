const Discord = require("discord.js");

exports.run = async (client, message, args, tools, map) => {
    if (message.channel.type === 'dm') return;
try {
    const embed = new Discord.RichEmbed()
    .setColor("#00B6CB")
    .setAuthor(`${client.user.username}`)
    .setTitle("Prefix = bs!")
    .setThumbnail("https://cdn.discordapp.com/avatars/463188966066225165/016772fc9f73c0a3f35fed528a5069d1.png")
    .addField("**Fun**", "`say` **-** `rolldice` **-** `givecandy` **-** `8ball` **-** `lucknumber`\
    **-** `quiz` **-** `flip`", true)
    .addField("**Utility**", "`avatar` **-** `botinfo` **-** `credits` **-** `help` **-** `ping` **-** `serverinfo` **-** `weather`", true)
    .setFooter(`©BlackSweet V0.3.5`)
    await message.author.send({embed})
    let serverembed = new Discord.RichEmbed()
    .addField(`${message.author.tag}`, "Please Check Your DM!, If You Do Not Receive Anything, Type in `helphere!`")
    .setColor("#00B6CB")
    .setAuthor(`${client.user.username}`)
    .setFooter(`©BlackSweet V0.3.5`)
    message.channel.send(serverembed);
} catch (e) {
    throw e;
}
}