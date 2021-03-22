const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    
    let motivo = args.slice(" ").join
    if(!motivo) motivo = "Motivo não informado"
    let avatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024 });
      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
          const embed = new Discord.MessageEmbed()
          .setDescription(`${message.author}, Você não tem permissão para execultar este comando`)
      }
      message.delete();
      message.channel.createOverwrite(message.guild.id, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
      })
      const embed = new Discord.MessageEmbed()
      .setTitle('Chat Destrancado')
      .setDescription(`<a:Si:821235764783611954>| Este chat foi desmutado.`)
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
