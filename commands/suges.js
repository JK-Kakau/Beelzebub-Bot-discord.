const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.cache.find(c => c.name === 'sugestões');
    if(!channel) return message.reply('Canal De **Sugestões** Não Encontrado, Crie Um Canal Escrito "**sugestões**"<a:I50:802675358091968512> ');

    let messageArgs = args.join(' ');
    const embed = new Discord.MessageEmbed()
    .setColor('#e999bf')
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(messageArgs);

    channel.send(embed).then((msg) =>{
        msg.react('<a:Yes:780340244724973568>');
        msg.react('<a:No:780340285317447722>');
        message.delete
    }).catch((err)=>{
        throw err;
    });
}

module.exports.config = {
    name: "suges",
    usage: "b!suges",
    aliases: []
}