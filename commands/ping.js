const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    let botping = new Date() - message.createdAt;

    message.channel.send(`${message.author}`)
    let embed = new Discord.MessageEmbed()
    .setTitle("Pong")
    .addField("\🤖", Math.floor(botping) + "ms")
    .addField("\🖥️", Math.floor(bot.ping) + "ms")
    .setColor(`#e999bf`)
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())

    message.channel.send(embed)

}
module.exports.config = {
    name: "ping",
    usage: "b!ping",
    aliases: []
}