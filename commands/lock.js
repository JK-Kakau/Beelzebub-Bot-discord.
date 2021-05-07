const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    const messageArray = message.content.split(" ");
  let motivo = args.slice(" ").join(" ")
    if(!motivo) motivo = "Motivo não informado"
    let avatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024});
       if(!message.member.hasPermission("MANAGE_MESSAGES")) {

           const lock = new Discord.MessageEmbed()
    .setTitle(`> **Ops,** ${message.author.tag} **acabei de reparar que você não tem permissão para dar lock.**`)
    .setColor('#e999bf')
    return message.channel.send(lock)
       } 
       message.delete();
       message.channel.createOverwrite(message.guild.id, {
           SEND_MESSAGES: false,
           VIEW_CHANNEL: true
       })
       const embed = new Discord.MessageEmbed()
       .setTitle('Chat Trancado')
       .setDescription(`Este chat foi trancado.`)
       .addField('Destrancar:', 'b!unlock', true)
       .addField('Trancado por:', `${message.author}`, true)
       .addField('Motivo:', motivo)
       .setTimestamp()
       .setThumbnail(avatar)
       .setColor('#e999bf')
       message.channel.send(embed);

}

module.exports.config = {
    name: "lock",
    usage: "b!lock",
    aliases: []
}