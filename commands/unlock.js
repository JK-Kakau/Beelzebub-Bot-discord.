const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    
    let motivo = args.slice(" ").join(" ")
    if(!motivo) motivo = "Motivo não informado"
    let avatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024 });

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {

        const unlock = new Discord.MessageEmbed()
 .setTitle(`> **Ops,** ${message.author.tag} **acabei de reparar que você não tem permissão para dar unlock.**`)
 .setColor('#e999bf')
 return message.channel.send(unlock)
    }
      
      message.delete();
      message.channel.createOverwrite(message.guild.id, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
      })
      const embed = new Discord.MessageEmbed()
      .setTitle('Chat Destrancado')
      .setDescription(`Este chat foi destrancado.`)
      .addField('Trancar:', 'b!lock', true)
      .addField('Trancado por:', `${message.author}`, true)
      .addField('Motivo:', motivo)
      .setTimestamp()
      .setThumbnail(avatar)
      .setColor('#e999bf')
      message.channel.send(embed);
}

module.exports.config = {
    name: "unlock",
    usage: "b!unlock",
    aliases: []
}
