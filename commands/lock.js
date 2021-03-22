const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let motivo = args.slice(' ').join
    if(!motivo) motivo = "Motivo não informado"
    let avatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024});
       if(!message.member.hasPermission("MANAGE_MESSAGES")) {
           const embed = new Discord.MessageEmbed()
           .setDescription(`${message.author}, Você não tem permissão para execultar este comando.`)
           return message.channel.send(embed)
       } 
       message.delete();
       message.channel.createOverwrite(message.guild.id, {
           SEND_MESSAGES: false,
           VIEW_CHANNEL: true
       })
       const embed = new Discord.MessageEmbed()
       .setTitle('Chat Trancado')
       .setDescription(`<a:Si:821235764783611954>| Este chat foi Mutado.`)
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