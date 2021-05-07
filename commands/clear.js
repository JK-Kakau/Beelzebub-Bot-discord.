const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    
    const perm = new Discord.MessageEmbed()
    .setTitle("> **Ops, acabei de reparar que você não tem permissão para dar clear.**")
    .setColor('#e999bf')
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(perm);

    let deleteAmount;

    const número = new Discord.MessageEmbed()
    .setTitle("> **Ops, insira um número válido.**")
    .setColor('#e999bf')
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.channel.send(número)}

    const limite = new Discord.MessageEmbed()
    .setTitle("> **Ops, você só pode excluir 99 mensagens por vez.**")
    .setColor('#e999bf')
    if (parseInt(args[0]) > 99) {
       return message.channel.send(limite)
    } else {
        deleteAmount = parseInt(args[0]);
    }

    const apagando = new Discord.MessageEmbed()
    .setTitle(`> <a:Yes:838861082139426818>**Foram deletadas** ${deleteAmount} **Mensagens deste canal.**<a:Yes:838861082139426818>`)
    .setColor('#e999bf')
    await message.channel.bulkDelete(deleteAmount +1, true);
    await message.channel.send(apagando)
}

module.exports.config = {
    name: "clear",
    usage: "b!clear",
    aliases: []
}