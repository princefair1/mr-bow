const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {
  if (message.channel.type === 'dm') return;

  var LuckNumber = Math.floor((Math.random() * 12000) + 0.120);
  const numEmb = new Discord.RichEmbed()
  .setColor("#00B6CB")
  .setAuthor('LUCKY NUMBER', 'https://vignette.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest?cb=20151206055532&path-prefix=en')
  .addField('And your lucky number is...', `${LuckNumber}!`);
  message.channel.send({embed: numEmb})

}