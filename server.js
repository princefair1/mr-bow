const Discord = require ("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const rainbow = require("./rainbow.json");
const rainbow1 = require("./rainbow1.json");
const rainbow2 = require("./rainbow2.json");
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube =  new Youtube("AIzaSyCdv0yGMUc5SAA5KLcEinDLELQii5WsnHA");
const allowedUsers = config.allowedUsers;
const roles = config.roleToDisco;
const roles3 = rainbow.roleToDisco;
const roles1 = rainbow1.roleToDisco;
const roles2 = rainbow2.roleToDisco;
const express = require('express');
const http = require('http');
const app = express();
const moment = require('moment');
const fs = require("fs");
const cooldown = new Set();
const yout = client.emojis.get("462640415732924427");
const idr = client.emojis.get("462640415732924427");
const green = client.emojis.get("462640415732924427");
const orange = client.emojis.get("462640415732924427");
const red = client.emojis.get("462640415732924427");
const grey = client.emojis.get("462640415732924427");
const online = client.emojis.get("462640415732924427");
const idle = client.emojis.get("462640415732924427");
const dnd = client.emojis.get("462640415732924427");
const offline = client.emojis.get("462640415732924427");
const buffering = client.emojis.get("321591151289171968");
const queue = new Map();

var server = {};
var prefix = "mr!"
// ping 5 minutes
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
    exports.run = async (bot, message, args) => { //OH BTW BOT IS YOUR CLIENT SO IF YOU USED CLIENT THEN CHNAGE ALL THE "BOT" TO "CLIENT" cool!
        var footertext = [`${bot.user.username}: oof sexy`, `${bot.user.username}: nice`, `${bot.user.username}: 🔥`, `${bot.user.username}: Someone's looking sharp today!`, `${bot.user.username}: oof if i wasn't a bot...`, `${bot.user.username}: looking sexier than a mug`];
        var rand = Math.floor(Math.random() * footertext.length);
        var randomfooter = footertext[rand]; //THIS AND THE TWO LINES ABOVE IS TOTALLY UNNECESSARY. But you want to make your bot more interactive so keep it.Just an array of some random shit, you can add more if you would like just read the code and change it at your will! 
        message.channel.startTyping();
        let msg = await message.channel.send('``Generating that sexy avatar...``') //UNNECESSARY BUT COOL.

        let user = message.mentions.users.first() || message.author; //THIS IS IMPORTANT BECAUSE YOU WANT YOUR BOT TO SHOW OTHER PEOPLE'S AVATAR AS WELL BY MENTIONING THEM!
    }

    //PS: I suck at coding and explaining shit. So i do apologise. If you have any questions you can contact me on discord.("Please Don\'t!") ;)



    //
    //
    // Music Bots
    //
    //


    client.on("ready", () => {
      // This event will run if the bot starts, and logs in, successfully.
      console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
      // Example of changing the bot's playing game to something useful. `client.user` is what the
      // docs refer to as the "ClientUser".
  client.user.setStatus('idle');
  client.user.setActivity(`Master Bot Rainbow `, {type: "WATCHING"});	
});

    client.on("guildCreate", guild => {
      // This event triggers when the bot joins a guild.
      console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setStatus('idle');
  client.user.setActivity(`Private Bot `, {type: "WATCHING"});	
});

    client.on("guildDelete", guild => {
      // this event triggers when the bot is removed from a guild.
      console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
        client.user.setStatus('idle');
  client.user.setActivity(`For Rainbow Roles `, {type: "WATCHING"});	
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('465474314594942976').setName(`Total Users: ${member.guild.memberCount}`)
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    member.guild.channels.get('465474314594942976').setName(`Member Count: ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    member.guild.channels.get('465474314594942976').setName(`Bot Count: ${bots}`)
});

    client.on('ready', () => {
      console.log('Watashi wa Siap!');
    });

    // Create an event listener for messages
    client.on('message', message => {
      // If the message is "what is my avatar"
      if (message.content === 'avatar') {
        // Send the user's avatar URL
        message.reply(message.author.avatarURL);
      }
    });

    client.on('message', message => {
    if (message.content === 'rai') {
      // Send the user's avatar URL
      message.reply("Amasa Pacal? Lan");
    }
    });

    client.on('message', message => {
    if (message.content === 'Rai') {
      // Send the user's avatar URL
      message.reply("Amasa Pacal? Lan");
    }
    });

    //
    //
client.on('message', message => {
    const swearWords = ["kontol", "memek","ngentod","anjing","jembut","KONTOL","MEMEK","JEMBUT","NGENTOD","ANJING"];
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
          const embed = new Discord.RichEmbed()
    .setColor('#00B6CB')
  .addField('Bad Words', 'Hey! That word has been banned, please don\'t use it!');
    message.author.send({embed}).catch(e => logger.error(e))
      message.channel.sendMessage('Bandel').then(msg => {msg.delete(5000)});
      }
})

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'greeting-farewells', 'welcome-goodbye');
    if (!channel) return;
    channel.send(`**[JOIN]**  ${member}`);
});

client.on('message', msg => {
    if (msg.content == prefix + 'floof') {
        require('request').get('https://api.tfdfurry.com/floof.json', (err, res, body) => {
            msg.channel.send(new Discord.RichEmbed().setImage('https://' + JSON.parse(body).file))
        });
    }
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', 'greeting-farewells', 'welcome-goodbye');
    if (!channel) return;
    channel.send(`**[LEAVE]**  ${member}`);
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'garox')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Mamang Sallamualaikum')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=oTJKrb5Qm0E", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'duck')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hehehe >:)')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=Jxfe5O7JE8Y", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'lingsirwengi')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hehehe >:)')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=KElWWGjDqg0", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + 'airhorn')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('Hehehe >:)')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=OFr74zI1LBM", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'egp')) {
  var voiceChannel = message.member.voiceChannel;
  var yt = require('ytdl-core');
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    message.channel.sendMessage('EGP...EGP ga gue pikirin.')
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=KTN1knGr-Xs", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});

    client.on("message", async message => {
      // This event will run on every single message received, from any channel or DM.
      
      // It's good practice to ignore other bots. This also makes your bot ignore itself
      // and not get into a spam loop (we call that "botception").
      if(message.author.bot) return;
      
      // Also good practice to ignore any message that does not start with our prefix, 
      // which is set in the configuration file.
      if(message.content.indexOf(config.prefix) !== 0) return;
      
      // Here we separate our "command" name, and our "arguments" for the command. 
      // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
      // command = say
      // args = ["Is", "this", "the", "real", "life?"]
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      
      if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit()
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)
    message.channel.send({embed})
  }
      
      if (command == "cium") {
      let kiss = [
        "http://cdn.smosh.com/wp-content/uploads/ftpuploads/bloguploads/awkward-kiss-little-girl.gif",
        "https://media1.tenor.com/images/9c92434bdeea2df04d67710f338b212d/tenor.gif?itemid=5223535",
        "https://vignette.wikia.nocookie.net/degrassi/images/1/1d/Dair_kissing_.gif/revision/latest?cb=20150429211626",
        "https://media.giphy.com/media/xT9IgFh732bmm00u1a/giphy.gif",
        "https://media.giphy.com/media/10wwy1cJ8j2aD6/giphy.gif",
        "https://media.giphy.com/media/Nydo55HzhyGqI/giphy.gif",
        "https://media.giphy.com/media/3og0IvIXD1UrcEvNmw/giphy.gif",
        
      ]

      let hugresult = Math.floor((Math.random() * kiss.length));
      if (!args[0]) {
          const ghembed = new Discord.RichEmbed()
              .setColor(`#06238B`)
              .setTitle(`${message.author.username} Cium Dirinya Sendiri! Dasar Jomblo :p `)
              .setImage(kiss[hugresult])
          message.channel.send({
              embed: ghembed
          })
          return;
      }
      if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
          const hembed = new Discord.RichEmbed()
              .setColor(`#06238B`)
              .setTitle(`${message.author.username} Mencium ${message.mentions.members.first().user.username}, so sweet :heart_eyes: `)
              .setImage(kiss[hugresult])
          message.channel.send({
              embed: hembed
          })
          return;
      }
      const ghembed = new Discord.RichEmbed()
          .setColor(`#06238B`)
          .setTitle(`${message.author.username} Cium Dirinya Sendiri! Dasar Jomblo `)
          .setImage(kiss[hugresult])
      message.channel.send({
          embed: ghembed
      })
  }
        if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let prefix = config.prefix;
    let messageArray = message.content.split(" "); 
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let user = message.mentions.users.first() || message.author;    
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
      
      if (command == "peluk") {
    let kiss = [
      "https://media.giphy.com/media/LIwTMXYWu7WWA/giphy.gif",
      "https://thumbs.gfycat.com/WarlikeDecentCicada-size_restricted.gif",
      "https://media1.tenor.com/images/5cd23c906465474946375ad0414f94e5/tenor.gif?itemid=8739843",
      "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif",
      "https://media.giphy.com/media/l378uBCYt1vfaj2aA/giphy.gif",
      "https://media.giphy.com/media/xT0Gqne4C3IxaBcOdy/giphy.gif",
      "https://media.giphy.com/media/xUOxfb8r3BhgPpfyKs/giphy.gif",
      "https://media.giphy.com/media/LuSeshH6YcgZq/giphy.gif",
      "https://media.giphy.com/media/QbkL9WuorOlgI/giphy.gif",
      "https://media.giphy.com/media/xT0Gqne4C3IxaBcOdy/giphy.gif",
      "https://media.giphy.com/media/gnXG2hODaCOru/giphy.gif",
      "https://media.giphy.com/media/8KKRIP5ZHUo2k/giphy.gif",
      "https://media.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif",
      
    ]

    let hugresult = Math.floor((Math.random() * kiss.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(`#06238B`)
            .setTitle(`${message.author.username} Peluk Diri Sendiri! Dasar Jomblo :p `)
            .setImage(kiss[hugresult])
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`#06238B`)
            .setTitle(`${message.author.username} Memeluk ${message.mentions.members.first().user.username}, :heart_eyes: `)
            .setImage(kiss[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(`#06238B`)
        .setTitle(`${message.author.username} Peluk Diri Sendiri! Dasar Jomblo `)
        .setImage(kiss[hugresult])
    message.channel.send({
        embed: ghembed
    })
}

if (command == "tampar") {
  let kiss = [
    "https://i.makeagif.com/media/8-19-2015/nLkMFV.gif",
    "https://media.giphy.com/media/83bGzE1mKEpXO/giphy.gif",
    "https://media.giphy.com/media/10WtjJwAFYqJPy/giphy.gif",
    "https://media.giphy.com/media/INuiLQB92kvok/giphy.gif",
    "https://media.giphy.com/media/MzC4ydlZNhxV6/giphy.gif",
    "https://media.giphy.com/media/vxvNnIYFcYqEE/giphy.gif",
    "https://media.giphy.com/media/irU9BlmqEwZwc/giphy.gif",
    "https://media.giphy.com/media/Y6c59hTH3TJoA/giphy.gif",
    "https://media.giphy.com/media/l0MYthTiOGtg1zsT6/giphy.gif",
    "https://media.giphy.com/media/3o72F9iEaswZcxpgnC/giphy.gif",
    "https://cdn.weeb.sh/images/BJgsX1Kv-.gif",
    "https://media.giphy.com/media/3oriNXBCGHrzCYIbZK/giphy.gif",
    "https://media.giphy.com/media/bGnQmK38QoSg8/giphy.gif",
    "https://media.giphy.com/media/Y6c59hTH3TJoA/giphy.gif",
    
  ]

  let hugresult = Math.floor((Math.random() * kiss.length));
  if (!args[0]) {
      const ghembed = new Discord.RichEmbed()
          .setColor(`#06238B`)
          .setTitle(`${message.author.username} Menampar diri sendiri :v `)
          .setImage(kiss[hugresult])
      message.channel.send({
          embed: ghembed
      })
      return;
  }
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
      const hembed = new Discord.RichEmbed()
          .setColor(`#06238B`)
          .setTitle(`${message.author.username} Menampar ${message.mentions.members.first().user.username} `)
          .setImage(kiss[hugresult])
      message.channel.send({
          embed: hembed
      })
      return;
  }
}

if (command == "nangis") {
  let kiss = [
    "https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif",
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
    "https://media.giphy.com/media/k61nOBRRBMxva/giphy.gif",
    "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
    "https://media.giphy.com/media/10tIjpzIu8fe0/giphy.gif",
    "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",
    "https://media.giphy.com/media/6Q3M4BIK0lX44/giphy.gif",
    "https://media.giphy.com/media/2Qs2hKWMvEzdu/giphy.gif",
    "https://media.giphy.com/media/Ph8OWoJA2M3eM/giphy.gif",
    "https://media.giphy.com/media/8ykJ4yAnwgK2I/giphy.gif",
    "https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif",
    "https://media.giphy.com/media/l3q2RauzE5Vzf7iYo/giphy.gif",
    "https://media.giphy.com/media/wViS9n0RqN2/giphy.gif",
    "https://media.giphy.com/media/3fmRTfVIKMRiM/giphy.gif",
    "https://media.giphy.com/media/9Jvj3vYjgmqH4AJTkx/giphy.gif",
    "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
    "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",
    
  ]
  let hugresult = Math.floor((Math.random() * kiss.length));
  if (!args[0]) {
      const ghembed = new Discord.RichEmbed()
          .setColor(`#06238B`)
          .setTitle(`${message.author.username} Nangid sendirian`)
          .setImage(kiss[hugresult])
      message.channel.send({
          embed: ghembed
      })
      return;
  }
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
      const hembed = new Discord.RichEmbed()
          .setColor(`#06238B`)
          .setTitle(`${message.author.username} Nangid Bersama ${message.mentions.members.first().user.username} `)
          .setImage(kiss[hugresult])
      message.channel.send({
          embed: hembed
      })
      return;
  }
}
      
      if (command === "botinfo") {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Invite me!",
      url: "https://goo.gl/kSraf8",
      description: "Hello Iam MasterBOt! Found Bugs? Contact Developer!",
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
        },
        { 
          name: "Developer",
          value: "`_Brickmaster_#0218`"  
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
      
      if(message == `${prefix}flip`) {
    let embed = new Discord.RichEmbed()
    .addField("**Result**", `Result: **${Math.floor(Math.random() * 2) == 0 ? "heads" : "tails"}**!`)
    .setColor("RANDOM")
    message.channel.send(embed)
  }

  if(message == `${prefix}jawaban?`) {
    let embed = new Discord.RichEmbed()
    .addField("**Result**", `Result: **${Math.floor(Math.random() * 2) == 0 ? "yes" : "no"}**!`)
    .setColor("RANDOM")
    message.channel.send(embed)
  }

  if(command === "developer") {
    let embed = new Discord.RichEmbed()
    .addField("`**_Brickmaster_#0218**`", "[Server Discord](https://discordapp.com/api/oauth2/authorize?client_id=445819023553200148&permissions=8&scope=bot)")
    .setColor("RANDOM")
    message.channel.send(embed)
  }

client.on('message', message => {
  if (message.content === '^Developer') {
    message.reply('_Brickmaster_#0218');
  }
});

client.on('message',message => {

  if (message.content === 'avatar'.mentions) {

    message.reply(message.author.avatar);

  }
});

client.on('message', message => {

  if (message.content === 'hai'){
      message.channel.send('hallo')
  }
})
      
client.on("message", async message => {
  var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
	var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
      case "mplay":
    var voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		var permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			var playlist = await youtube.getPlaylist(url);
			var videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`✅Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
          var index = 0;
					message.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the 🔎 results ranging from 1-10.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send('No or invalid value entered, cancelling video selection.');
					}
					var videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send('🆘I could not obtain any search results.');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
        break;
      case "mskip":
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
        break;
      case "mstop":
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
break;
      case "mvolume":
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		if (!args[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    var volval;
            if (serverQueue.volume == 1) {
                volval = `○──── :loud_sound:⠀`
            }
            if (serverQueue.volume == 2) {
                volval = `─○─── :loud_sound:⠀`
            }
            if (serverQueue.volume == 3) {
                volval = `──○── :loud_sound:⠀`
            }
            if (serverQueue.volume == 4) {
                volval = `───○─ :loud_sound:⠀`
            }
            if (serverQueue.volume == 5) {
                volval = `────○ :loud_sound:⠀`
            }
            return message.channel.send(volval)
break;
      case "mnp":
		if (!serverQueue) return message.channel.send('There is nothing playing.');
    let serverembed = new Discord.RichEmbed()
    .addField("**🎶 Now playing:** ", `**${serverQueue.songs[0].title}**`)
    .setColor("#06238B")
    .setAuthor(`${client.user.username}`)
    .setFooter(`©MasterBot V0.4.4`)
    message.channel.send(serverembed);
break;
      case "mqueue":
		if (!serverQueue) return message.channel.send('There is nothing playing.');
        let embed = new Discord.RichEmbed()
        .setColor("#06238B")
        .setAuthor(`${client.user.username}`)
        .setFooter(`©MasterBot V0.4.4`)
        .addField("Song queue:", `${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
        **Now playing:** ${serverQueue.songs[0].title}`)
        message.channel.send(embed);(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
break;
      case "mpause":
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
      let embed = new Discord.RichEmbed()
      .setColor("#06238B")
      .setAuthor(`${client.user.username}`)
      .setFooter(`©MasterBot V0.4.4`)
      .addField('⏸ Pause', "Paused Your Music")
      message.channel.send(embed)('Paused the music for you!');
		}
		return message.channel.send('There is nothing playing.');
break;
      case "mresume":
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
      let serverembed = new Discord.RichEmbed()
      .addField("Resume: ", `:notes: Resumed the music for you!`)
      .setColor("#06238B")
      .setAuthor(`${client.user.username}`)
      .setFooter(`©MasterBot V0.4.4`)
      return message.channel.send(serverembed);
		}
		return message.channel.send('There is nothing playing.');
	

	return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
	var serverQueue = queue.get(message.guild.id);
	console.log(video);
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		var queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
    let serverembed = new Discord.RichEmbed()
    .addField("Add queue: ", `✅ **${song.title}** has been added to the queue!`)
    .setColor("#06238B")
    .setAuthor(`${client.user.username}`)
    .setFooter(`©MasterBot V0.4.4`)
    message.channel.send(serverembed);
	}
	return undefined;
}
  function play(guild, song) {
	var serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
      let serverembed = new Discord.RichEmbed()
      .addField("Music End", ':checkered_flag: Song Queue Finished!')
      .setColor("#06238B")
      .setAuthor(`${client.user.username}`)
      .setFooter(`©MasterBot V0.4.4`)
      message.channel.send(serverembed);
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
    .on('error', error => console.error(error));
    var volval;
    if (serverQueue.volume == 1) {
        volval = `○──── :loud_sound:⠀`
    }
    if (serverQueue.volume == 2) {
        volval = `─○─── :loud_sound:⠀`
    }
    if (serverQueue.volume == 3) {
        volval = `──○── :loud_sound:⠀`
    }
    if (serverQueue.volume == 4) {
        volval = `───○─ :loud_sound:⠀`
    }
    if (serverQueue.volume == 5) {
        volval = `────○ :loud_sound:⠀`
    }
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  var NowEmbed = new Discord.RichEmbed().setColor("#06238B")
   .addField(`===========================================================`,`
ɴᴏᴡ ᴘʟᴀʏɪɴɢ: **${song.title}**
──────────────────────────────────────────── 
◄◄⠀▐▐ ⠀►►⠀⠀　　${volval}    　　 :gear: ❐ ⊏⊐ 
====================================================== `)
   .setFooter("©MasterBot V0.4.4 | Invite Me! Using ^invite")
   .setAuthor(`${client.user.username}`)
.addField("`_Brickmaster_` Server","https://discord.gg/jmvEcyT")
    .addField("Master Bot","[Invite](https://discordapp.com/oauth2/authorize?client_id=445819023553200148&scope=bot&permissions=2146958591)");
    serverQueue.textChannel.send(NowEmbed);
}
});
      
      // Client join and leave Discord
client.on("guildCreate", async guild => {
  let guildCreateChannel = client.channels.get("465474314594942976");
  
  let general = guild.channels.find('name', 'welcome-goodbye');
  guild.channels.get(general.id).createInvite().then(invite => {
    
    let joinEmbed = new Discord.RichEmbed()
      .setTitle('Guild Joined')
      .setThumbnail(guild.iconURL)
      .setURL(invite.url)
      .setDescription('Join the new Guild')
      .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
      
    guildCreateChannel.send(joinEmbed);
  });
}); 

client.on("guildDelete", async guild => {
  let guildCreateDelete = client.channels.get("465474314594942976");
  
  let leaveEmbed = new Discord.RichEmbed()
    .setTitle('Guild Left')
    .setThumbnail(guild.iconURL)
    .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
  
  guildCreateDelete.send(leaveEmbed);
});
      
            client.on("message", message => {
if(message.content.startsWith(prefix + "stopspam")) {
    if(allowedUsers.includes(message.author.id)) {
    message.channel.sendMessage("Turn Off Spam Messages.");
    setTimeout(() => { console.log(process.exit(0)); }, 300);
  } else {
    message.reply(`SIAPA LU BANGSAT??????`);
    }
  }
  
  });
      
client.on("message", message => {
  if (message.content.startsWith(prefix + 'meme')) {
    let [meme, ...numbers] = message.content.split(" ")
let min = 1
let max = 7
var maths = Math.floor(Math.random() * (max - min + 1)) + min;
var player =
message.channel.sendMessage(maths + 'SendMemeFileÂ§Number');
  }
});
client.on("message", message => {
if (message.content.startsWith(prefix + 'invite')) {
    message.channel.sendMessage('To invite me to your Server click this link https://discordapp.com/oauth2/authorize?client_id=275746862877769728&scope=bot&permissions=0 ');
}
});
client.on("message", message => {
if (message.content.startsWith('1SendMemeFileÂ§Number')) {
  message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268513562551517186/268536682272391169/download.jpg');
}
});
client.on("message", message => {
if (message.content.startsWith('2SendMemeFileÂ§Number')) {
    message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268513562551517186/268536187654897664/1hds6o.jpg');
}
});
client.on("message", message => {
if (message.content.startsWith('3SendMemeFileÂ§Number')) {
  message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268537624187240449/268540564935278604/th.png');
}
});
client.on("message", message => {
if (message.content.startsWith('4SendMemeFileÂ§Number')) {
  message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268537624187240449/268540761681690624/th.png');
}
});
client.on("message", message => {
if (message.content.startsWith('5SendMemeFileÂ§Number')) {
  message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268537624187240449/268541326767816705/th.png');

}
});
client.on("message", message => {
if (message.content.startsWith('7SendMemeFileÂ§Number')) {
  message.delete();
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/268537624187240449/268541680016293889/th.png');
}
});
      
client.on("message", function(message) {
if(message.content.startsWith(prefix + "skinsearch")) {
var search = message.content.split(" ").slice(1).join(" ")
message.channel.sendMessage(`http://www.minecraftskins.com/search/skin/`+search+`/1/`)
console.log(message.author.username + " Searched the Skin: " + search)
}
});
      
client.on("message", function(message) {
if(message.content.startsWith(prefix + "playersearch")) {
var search = message.content.split(" ").slice(1).join(" ")
message.channel.sendMessage(`https://namemc.com/name/`+search)
console.log(message.author.username + " Searched the Skin: " + search)
}
});

   
      
   

      
      
    try {
      let commands = require(`./commands/${command}.js`);
      commands.run(client, message, args);
    } catch (e) {
     console.log(e.stack)
    } finally {
      console.log(command)
    }
      
          try {
      let commands = require(`./usage/${command}.js`);
      commands.run(client, message, args);
    } catch (e) {
     console.log(e.stack)
    } finally {
      console.log(`${message.author.tag} menggunakan perintah ${command}`)
    }
      


        });

      client.on("message", async message => {
  const emoji = client.emojis.find("name", "buffering");
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let prefix = config.prefix;
    let messageArray = message.content.split(" "); 
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (cmd === `${prefix}register`) {
      let args = message.content.split(' ').slice(1).join(' ');
    message.delete();
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send('**[COOLDOWN]** Register Cooldown For **10 Seconds**');
    }
    if (args.length < 1) {
        return message.channel.send(`Halo ${message.author}, Mohon kasih alasan mengapa kamu mau join menjadi iHH.C Member.`);
    }
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 10000);
    let guild = message.guild;
    message.channel.send(' ');
    const embed = new Discord.RichEmbed()
        .setAuthor(`Register ${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`Terima Kasih telah mendaftar, jika di react :heavy_check_mark: berarti kamu telah di terima, jika di react :x: berarti kamu tidak di terima.`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
        .setColor("#00B6CB")
        .addField('Register', `**Nama:** ${message.author}\n**Alasan Join:** ${args}`)
    message.channel.send(embed).then(msg => {
        msg.react(emoji)
    })
    }
});

client.on("message", message => {

    function discoRole() {
      let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: random}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    if(message.content.startsWith(prefix + "startdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, config.ms);
    message.channel.sendMessage("Turn On Disco Roles");
    } else {
    }
  } else
  
  if(message.content.startsWith(prefix + "stopdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    message.channel.sendMessage("Turn Off Disco Roles.");
    setTimeout(() => { console.log(process.exit(0)); }, 300);
  } else {
    message.reply(`Mau ngapain??`);
    }
  }
  
  });

client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
})

client.on("message", message => {

    function discoRole() {
      let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      roles3.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: random}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `Rainbow.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    if(message.content.startsWith(prefix + "disco")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, rainbow.ms);
    message.channel.sendMessage("Turn On Disco Roles");
    } else {
    }
  } else
  
  if(message.content.startsWith(prefix + "stopdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    message.channel.sendMessage("Turn Off Disco Roles.");
    setTimeout(() => { console.log(process.exit(0)); }, 300);
  } else {
    message.reply(`Mau ngapain??`);
    }
  }
  
  });

client.on("message", message => {

    function discoRole() {
      let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      roles1.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: random}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `Rainbow.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    if(message.content.startsWith(prefix + "sdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, rainbow1.ms);
    message.channel.sendMessage("Turn On Disco Roles");
    } else {
    }
  } else
  
  if(message.content.startsWith(prefix + "stopdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    message.channel.sendMessage("Turn Off Disco Roles.");
    setTimeout(() => { console.log(process.exit(0)); }, 300);
  } else {
    message.reply(`Mau ngapain??`);
    }
  }
  
  });

client.on("message", message => {

    function discoRole() {
      let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      roles2.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: random}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `Rainbow.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    if(message.content.startsWith(prefix + "dugem")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, rainbow2.ms);
    message.channel.sendMessage("Turn On Disco Roles");
    } else {
    }
  } else
  
  if(message.content.startsWith(prefix + "stopdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    message.channel.sendMessage("Turn Off Disco Roles.");
    setTimeout(() => { console.log(process.exit(0)); }, 300);
  } else {
    message.reply(`Mau ngapain??`);
    }
  }
  
  });

        

      

    client.login(process.env.TOKEN);
