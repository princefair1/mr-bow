const A = require('discord.js');
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 5000);
  var today = new Date()
  let Day = today.toString().split(" ")[0].concat("day");
  let Month = today.toString().split(" ")[1]
  let Year = today.toString().split(" ")[3]
    const emoji1 = '🇾'
    const emoji = '🇳'
    message.channel.send('YAKIN MAU INVITE ??').then(msg => {
        msg.react(emoji1).then(r => {
            msg.react(emoji)
          const yes = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
            const nopleas = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
            const sure = msg.createReactionCollector(nopleas, {
                time: 1000000
            });
            const no = msg.createReactionCollector(yes, {
                time: 1000000
            });
            sure.on('collect', r => {
                const emb = new A.RichEmbed()
                    .setTimestamp()
    .addField("**Invite BOT**", "[Invite](https://discordapp.com/oauth2/authorize?client_id=468817067827527680&scope=bot&permissions=2146958591)")
    .setColor("#00B6CB")
    .setFooter(`©BlackSweet V0.3.5`)
                message.channel.send({
                    embed: emb
                })
        })
            no.on('collect', r => {
            })
        })
                              })
}