const Discord = require('discord.js');
const { json } = require('express');
const bot = new Discord.Client();
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
        let userm = message.mentions.users.first();

        const mention = new Discord.MessageEmbed()
    .setTitle("> **Ops, mencione alguém para dar aquele beijinho goxtoso :3**")
    .setColor('#e999bf')
        if (!userm) return message.channel.send(mention);

        const data = await fetch('https://nekos.life/api/v2/img/kiss')
         .then(res => res.json())
         .then(json => json);
         const url = data.url;
         let avatar = message.author.displayAvatarURL({format: 'png'});
         const embedreturn = new Discord.MessageEmbed()
         .setTitle('Aceita me beijar?')
         .setColor('#e999bf')
         .setDescription(`O usuário ${message.author} Deseja te beijar, ${userm}.\nVocê aceita?\nReaja com \🥰 Para aceitar ou \😤 Para recusar`)
         .setThumbnail(avatar)
         .setAuthor(message.author.tag, avatar);
         let messagereturn = await  message.channel.send(embedreturn);
         await messagereturn.react('\🥰');
         await messagereturn.react('\😤');
         const reactions = ['\🥰', '\😤'];
         const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === userm.id;
         const collector = messagereturn.createReactionCollector(filter, {time: 600})
         collector.on('collect', async emoji => {
             switch(emoji._emoji.name){
                 case('\🥰'):
                 const embed1 = new Discord.MessageEmbed()
         .setTitle('UWU Ui Ui vai dar namoro ksksks.')
         .setColor('#e999bf')
         .setDescription(`${message.author} Acaba de beijar ${userm}`)
         .setImage(url)
         .setTimestamp()
         .setThumbnail(avatar)
         .setFooter('会 ୧ Beelzebub🌸 Bot')
         .setAuthor(message.author.tag, avatar);  
         await  message.channel.send(embed1);
         break;
         case ('\😤'):
         const embed2 = new Discord.MessageEmbed()
         .setTitle('Á vida é triste né? Amigo(a)\😭')
         .setColor('#e999bf')
         .setDescription(`${userm} Acaba de recusar um beijo de ${message.author}`)
         .setImage()
         .setTimestamp()
         .setThumbnail(avatar)
         .setFooter('会 ୧ Beelzebub🌸 Bot')
         .setAuthor(message.author.tag, avatar);
         await  message.channel.send(embed2);
         break;
         default:
            const embed3 = new Discord.MessageEmbed()
            .setTitle('Não respondeu, talvez não queira te beijar.\😢')
            .setColor('#e999bf')
            .setDescription(`${userm} Não Respondeu O Beijo A Tempo.`)
            .setTimestamp()
            .setThumbnail(avatar)
            .setFooter('会 ୧ Beelzebub🌸 Bot')
            .setAuthor(message.author.tag, avatar);
            await  message.channel.send(embed3);
             break;

             }
         })


    }

    module.exports.config = {
    name: "kiss",
    usage: "b!kiss",
    aliases: []
}
