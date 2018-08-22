const {RichEmbed} = require("discord.js");
exports.run = async (client, message, args, level) => {
if (message.author.id == "335035386923581440") {
var nameResult = args.join(' ');
if (!nameResult) nameResult = null;
client.user.setActivity(nameResult, {type: "WATCHING"});
let embed = new RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
.setDescription(`${nameResult} is now my new Playing Game. (Set as WATCHING)`)
message.channel.send(embed)
} else {
  let embed2 = new RichEmbed()
  .setTitle("This command is restricted to my Owner.")
  message.channel.send(embed2)
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "setWatching",
  category: "Owner",
  description: "Sets new bot game in watching form",
  usage: "setWatching"
};