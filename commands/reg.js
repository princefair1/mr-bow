const emoji = "✅"

const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if (message.channel.type === 'dm') return;
    let user = message.mentions.users.first() || message.author;
    let alasan = args.join(" ").slice(22);
   
   let embed = new Discord.RichEmbed()
   .setColor("#00B6CB")
   .setAuthor(`${user.username}`)
   .setThumbnail(user.displayAvatarURL)
   .addField('Register', `**Nama:** ${message.author}\n**Nick MC, Ingin Menjadi:** ${args}`)
   .setFooter(`© BlackSweet`)
          message.channel.send(embed).then(msg => {
        msg.react(emoji)
          .then(message => client.destroy())
          .then(() => client.login("TOKEN"));
})
}