const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    const embed = new Discord.MessageEmbed()
    .setTitle('───────  Central De Ajuda  ───────')
    .setURL('https://discord.gg/G748TcF87q')
    .setDescription('<a:Yes:818832754435162152>Temos apenas esses comandos por enquanto.<a:Yes:818832754435162152>')
    .setColor('#e999bf')
    .setThumbnail('https://media.discordapp.net/attachments/818845547079139358/821834758056050739/unknown.png')
    .setImage('https://images-ext-2.discordapp.net/external/SnHXYdOBdL3_o9ZRzNGCtOVWw6p72Wh1incOPzpzBYQ/%3Fwidth%3D872%26height%3D473/https/media.discordapp.net/attachments/818898637991706645/818900602910277652/108_Sem_Titulo_20210309143847.png')

    .addFields(
        {name: '<a:seta:822098866945261568> b!clear', value: '| Limpar as mensagens de um servidor.'}
    )
    .addFields(
        {name: '<a:seta:822098866945261568> b!ban', value: '| Banir do servidor o usuário mencionado.'}        
    )
    .addFields(
        {name: '<a:seta:822098866945261568> b!lock', value: '| Bloquear o canal que o comando foi usado.'}
    )
    .addFields(
        {name: '<a:seta:822098866945261568> b!unlock', value: '| Desbloquear o canal que o comando foi usado.'}
    )
    .addFields(
        {name: '<a:seta:822098866945261568> b!avatar', value: '| Ver sua foto de perfil ou do usuário mencionado.'}
    )
    .addFields(
        {name: '<a:seta:822098866945261568> b!say', value: '| Fazer o bot dizer a sua mensagem.'}
    )
    .addFields(
        {name: '<a:seta:822098866945261568> b!cooldown', value: '| Adiciona um tempo para usar meus comandos.'}
    )
    .addFields(
        {name: '<a:seta:822098866945261568> b!TGN', value: '| Ver informações sobre a team TGN.'}
    )

   message.channel.send(embed);
}

module.exports.config = {
    name: "help",
    description: "Informa meus comandos.",
    usage: "b!help",
    accessableby: "Membrs",
    aliases: []
}