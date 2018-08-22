const Discord = require("discord.js");

exports.run = async (client, message, args, tools, map) => {

message.channel.send({embed: {
    color: '00B6CB',
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Invite me!",
    url: "https://discordapp.com/oauth2/authorize?client_id=463188966066225165&scope=bot&permissions=2146958591",
    description: "Hello Iam MasterBot! Found Bugs? Contact Developer!",
    fields: [{
        name: "Server Joined",
        value: `${client.guilds.size}`
      },
      {
        name: "Channels",
        value: `${client.channels.size}`
      },
      { 
        name: "People Use this bot",
        value: `${client.users.size}`  
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "©BlackSweet V0.3.5"
    }
  }
});
}