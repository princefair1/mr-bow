const agree = "🔼";
const disagree = "🔽"

module.exports.run = async (client, message, args) => {
  

  let msg = await message.channel.send("Vote!");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});
  message.channel.send(`Voting complete! \n\n${agree}: ${reactions.get(agree).count-1}\n${disagree}: $reactions.get(disagree).cound-1}`);
}

module.exports.help = {
  nem: "await"
}