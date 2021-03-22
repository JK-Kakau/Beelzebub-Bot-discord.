const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    const embed = new Discord.MessageEmbed()
    .setTitle('Canal do youtube')
    .setURL('https://www.youtube.com/channel/UCxtXVKO2wpg5T4kzCAByUhA')
    .setAuthor('Criadores oficiais do bot e da team TGN.')
    .setDescription('TGN é um grupo de programadores que tem o objetivo de fazer um bot reconhecido no discord por todos.')
    .setColor('#e999bf')
    .setImage('https://media.discordapp.net/attachments/738500081358995468/818881668596236348/unknown.png')
    .setFooter('Team ᵀᴳᴺ : </! Kakau ᵀᴳᴺ> | ᵀᴳᴺ Jujuba 使 | Otsukyw |')
    .addFields(
        { name: 'Link do nosso servidor.', value: 'https://discord.gg/9wFWNz9dqt'}
    )

   message.channel.send(embed);
}

module.exports.config = {
    name: "TGN",
    description: "Crie uma embed com infos.",
    usage: "b!TGN",
    accessableby: "Membrs",
    aliases: []
}
