const db = require('quick.db');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('lu gk punya permiss');
  if (!args.join(' ')) return message.channel.send('Please provide a role name to set server autorole!');
  
  db.set(`autorole_${message.guild.id}`, args.join(' ')).then(autorole => {
    message.channel.send(`Server autorole has been set to ${autorole}`);
  });
 };
 