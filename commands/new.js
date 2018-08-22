const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let channelSubject = args.join(" ");

    let guildNumber = 462302414213480449

    if (!guildNumber[message.guild.id]) {
        guildNumber[message.guild.id] = {
            number: 0
        }

        fs.writeFile((guildNumber), (err) => {
            if (err) console.log(err);
        });
    }

    let ticketParent = message.guild.channels.find(c => c.name == "Tickets");

    if (!ticketParent) {
        await message.guild.createChannel("Tickets", "category");
    }

    function createChannel() {
        guildNumber[message.guild.id].number++;

        fs.writeFile("./guildNumbers.json", JSON.stringify(guildNumber), (err) => {
            if (err) console.log(err);
        });

        message.guild.createChannel(`ticket-${guildNumber[message.guild.id].number}`, "text").then(async c => {
            c.overwritePermissions(message.guild.defaultRole, {
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: true
            });
            await c.setParent(ticketParent, "Tickets category");

            if (channelSubject) {
                let embed = new Discord.RichEmbed()
                    .setTitle(`A new channel, specially made for you, ${message.author.tag}`)
                    .setColor("#2A5B5F")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField("Subject:", `${channelSubject}.`);

                await c.send(embed);
            } else {
                let embed = new Discord.RichEmbed()
                    .setTitle(`A new channel, specially made for you, ${message.author.tag}`)
                    .setColor("#2A5B5F")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField("Subject:", `No channel subject provided.`);

                await c.send(embed);
            }
        });
    }

    createChannel();
}

module.exports.help = {
    name: "new"
}