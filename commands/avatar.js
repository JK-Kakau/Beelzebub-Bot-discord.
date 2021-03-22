const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    let user = message.mentions.users.first() || message.author;

    let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

    let embed = new Discord.MessageEmbed()
    .setColor(`#e999bf`)
    .setTitle(`<a:planete:808407818415505488> Avatar de ${user.username} <a:planete:808407818415505488>`)
    .setImage(avatar)
    .setFooter(` Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL(
        {format: "png"}));
        await message.channel.send(embed);

    };

module.exports.config = {
    name: "avatar",
    usage: "b!avatar",
    aliases: []
}