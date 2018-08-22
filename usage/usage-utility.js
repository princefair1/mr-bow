exports.run = (client, message, args) => {
    if (message.channel.type === 'dm') return;
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Usage Commands Utility",
    url: "http://google.com",
    fields: [{
        name: "Avatar",
        value: "^avatar [mention]."
      },
      {
        name: "Bot Info",
        value: "^botinfo."
      },
      {
        name: "Bug Report",
        value: "^bugreport [bug name]."
      },
      {
        name: "Create Invite",
        value: "^createinvite."
      },
      {
        name: "Server Info",
        value: "^serverinfo."
      },
      {
        name: "User Info",
        value: "^userinfo [mention]."
      },
      {
        name: "Weather",
        value: "^weather [city]."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© MasterBot"
    }
  }
});
}