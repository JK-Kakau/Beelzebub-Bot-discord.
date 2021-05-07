const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')
const status = {
    online: "Online",
    idle: "Ausente",
    dnd: "Não Pertube",
    offline: "Offline/Invisível"
}; 

const boti = {
    false: "Não.",
    true: "Sim."
};

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    const member = message.mentions.members.first() || message.guild.member(args[0]) || message.member;

    const mentiD = new Discord.MessageEmbed()
    .setTitle("> **Ops, você não mencionou e nem usou o id de alguém para ver as informações.**")
    .setColor('#e999bf')
    if (!member) return message.channel.send(mentiD);

    const embed = new Discord.MessageEmbed()
    .setColor(`#e999bf`)
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setAuthor(`${member.user.tag}`, `${member.user.displayAvatarURL()}`)
    .addField("Apelido", `${member.nickname !== null ? `${member.nickname}` : "Nenhum"}`, true)
    .addField("Bot", `${boti[member.user.bot]}`, true)
    .addField("Entrou Em", `${moment(member.joinedAt).format("LLLL")}`, true)
    .addField("Status", `${status[member.user.presence.status]}`, true)
    .addField("Jogando", `${member.user.presence.game !== null ? `${member.user.presence.game}` : "Manuntenção"}`, true)
    .addField("Criado Em", `${moment(member.user.createdAt).format("LLLL")}`, true)
    .setFooter('会 ୧ Beelzebub\🌸 Bot')
    message.channel.send(embed)
};

module.exports.config = {
    name: "userinfo",
    usage: "b!userinfo",
    aliases: []
}