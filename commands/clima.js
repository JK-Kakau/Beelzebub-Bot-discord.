const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});

    weather.find({
        search: args, 
        degreeType: 'C'
    }, function (err, result) {
        if (err) console.log(err);

        const cidade = new Discord.MessageEmbed()
    .setTitle("> **Ops, Informe uma cidade.**")
    .setColor('#e999bf')
        if (!result) return message.channel.send(cidade)

        const cidi = new Discord.MessageEmbed()
    .setTitle("> **Ops, não encontrei está cidade**")
    .setColor('#e999bf')
        if (!result[0]) return message.channel.send(cidi)

        let embed = new discord.MessageEmbed()
        .setDescription(`**${result [0].location.name}**`)
        .addField(`**Temperatura**`, `${result [0].current.temperature}°C`)
        .addField(`**Sensação Térmica**`, `${result [0].current.feelslike}°C`)
        .addField(`**Umidade**`, `${result [0].current.humidity}%`)
        .addField(`**Vento**`, `${result [0].current.windspeed}`)
        .setColor('#e999bf')
        .setImage(result [0].current.imageUrl)

        message.channel.send(embed)

    });
};

module.exports.config = {
    name: "clima",
    description: "Informar o clima de uma cidade",
    usage: "b!clima",
    accessableby: "Membrs",
    aliases: ['tempo']
}
