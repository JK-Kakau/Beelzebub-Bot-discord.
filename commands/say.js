const Discord = require('discord.js');
 
exports.run = async (bot, message, args) => {
  const sayMessage =args.slice(' ');
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não tem permissão para execultar este comando.`)
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};

module.exports.config = {
    name: "say",
    usage: "b!say",
    aliases: []
}
