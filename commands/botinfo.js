const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});

    const botembed = new Discord.MessageEmbed() 
    .setColor('#e999bf')
    .setAuthor('Beel FofahZap\🥰', ' ', ' ')
    .addField('**Library**', 'Discord.js', true)
    .addField('**Versão**', '1.0.0', true)
    .addField('**Ultima atualização**', '03/05/2021', true)
    .addField('**Versão do Node.js**', '15.14.0.', true)
    .addField('**Versão do Discord.js**', '12.5.3', true)
    .addField('**Versão do VScode**', '1.55.2', true)
    .addField('**Usuários**', `${bot.users.cache.size}`, true)
    .addField('**Servidores**', `${bot.guilds.cache.size}`, true)
    .addField('**Canais**', `${bot.channels.cache.size}`, true)
    .setFooter('会 ୧ Beelzebub\🌸 Bot')
    message.channel.send(botembed);



}

module.exports.config = {
    name: "botinfo",
    description: "Informações do bot.",
    usage: "b!botinfo",
    accessableby: "Membrs",
    aliases: []
}