const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.channel.type === 'dm') return;
    let replies = ["One", "Two", "Three", "Four", "Five", "Six"];
    let result = Math.floor((Math.random() * replies.length));

    message.delete().catch(O_o => {});

    try {
        let newembed = new Discord.RichEmbed()
            .setAuthor("A dice has been rolled!")
            .setColor("#00B6CB")
            .setDescription("Rolled By: " + message.author.username + "\nResult: " + replies[result]);

        message.channel.send({
            embed: newembed
        });
    } catch (e) {
        console.log(e.stack);
    }; // The try is because it errored when I didn't do it.
};

module.exports.help = {
    name: "rolldice"
}