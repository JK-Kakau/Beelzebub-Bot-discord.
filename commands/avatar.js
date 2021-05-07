const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    let user = message.mentions.users.first() || bot.users.cache.get(args[0]) ||
    message.author;

    let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

    let embed = new Discord.MessageEmbed()
    .setColor(`#e999bf`)
    .setTitle(`Avatar de ${user.username} `)
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