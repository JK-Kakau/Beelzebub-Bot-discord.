const Discord = require('discord.js');

module.exports.run = async (bot, message) => {
    message.delete().catch(O_o => {});
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    const perm = new Discord.MessageEmbed()
    .setTitle("> **Ops, acabei de reparar que você não tem permissão para usar o slowmode.**")
    .setColor('#e999bf')

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(perm);

    const vl = new Discord.MessageEmbed()
    .setTitle("> **Ops, Insira um número válido.** **obs: (antes que continuem o spam).**")
    .setColor('#e999bf')

    if (isNaN(args[0]) || parseInt(args[" "]) <= 0) { return message.channel.send(vl)}
    else {

        const slow = new Discord.MessageEmbed()
    .setTitle(`> **Slowmode Ativado Para:** \`${args[0]}\`s <a:Yah:838875311600828437>`)
    .setColor('#e999bf')
    .setFooter('会 ୧ Beelzebub🌸 Bot')
    message.channel.setRateLimitPerUser(args[0])
    message.channel.send(slow)
}
}

module.exports.config = {
    name: "slowmode",
    aliases: []
}