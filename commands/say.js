const Discord = require('discord.js');
 
exports.run = async (bot, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage)
}

module.exports.config = {
    name: "say",
    usage: "b!say",
    aliases: []
}
