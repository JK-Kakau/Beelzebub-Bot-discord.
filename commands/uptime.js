const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    let totalSeconds = bot.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    const embed = new Discord.MessageEmbed()
    .setDescription('Online Á <a:KirbyBZ:836299182083014686>')
    .addField('Dias', `${days}`)
    .addField('Horas', `${hours}`)
    .addField('Minutos', `${minutes}`)
    .addField('Segundos', `${seconds}`)
    .setColor('#e999bf')
    .setTimestamp()
    message.channel.send(embed);

}
    module.exports.config = {
        name: "uptime",
        usage: "b!uptime",
        aliases: []
    }