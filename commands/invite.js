const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    let link = ('https://discord.com/api/oauth2/authorize?client_id=817857650170527796&permissions=8&scope=bot')
    message.delete().catch(O_o => {});
    const embed = new Discord.MessageEmbed()
    .setColor('#e999bf')
    .setAuthor('Me Adicione :3', ' ', ' ')
    .setDescription(`**Se você procura em me adicionar [Clique aqui](${link})**`)
    .setTimestamp()
    .setFooter('Prazer me chamo Beel');
    message.channel.send(embed);

}

module.exports.config = {
    name: "invite",
    description: "Convite do bot",
    usage: "b!invite",
    aliases: []
}
