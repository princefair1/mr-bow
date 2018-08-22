const Discord = require("discord.js");

module.exports.run = async (bot, message, args, jChannel) => {
  if(!message.member.roles.some(r=>["T-Pac Official"].includes(r.name))) return message.reply("Sorry, You don't have the premissions biatch");
  let bUser   = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let bReason = args.join(" ").slice(22);

    let banEmbed = new Discord.RichEmbed()
    .setTitle("Softban")
    .setColor("#FFFFF")
    .addField("**~**User**~**", bUser)
    .addField("**~**Author**~**", message.author)
    .addField("**~**Channel**~**", message.channel)
    .addField("**~**Time**~**", moment(message.createdAt).format(`MMMM Do YYYY, h:mm a`))
    .addField("**~**Reason**~**", bReason);

    let banAnnounce = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`User ${bUser} got SoftBanned from the server!`);

    let banDm = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**>>>** You got SoftBanned from ${message.guild.name}!\n**>>>** Reason: ${bReason}\n**>>>** You can join again immediately.`);

    try {
        message.guild.channels.get(jChannel).createInvite().then(invite =>
            bUser.send(invite.url)
        );
        bUser.send(banDm);
    } catch(e) {
        console.error(e.stack);
    }

    let botChannel = message.guild.channels.find(`name`, "general");
    if (!botChannel) return message.channel.send("**>>>** Could not locate Bot Report channel!\n**>>>>** Please create a channel called ``bot-reports``.");

    message.delete().catch(O_o=>{});
    message.channel.send(banAnnounce).then(msg => msg.delete().catch(O_o=>{}));
    message.guild.member(bUser).ban(bReason);
    message.guild.unban(bUser.id).catch(O_o=>{});
    botChannel.send(banEmbed);
    console.log(`User ${bUser} got SoftBanned by ${message.author}.`);

}

module.exports.help = {
    name: "softban"
}