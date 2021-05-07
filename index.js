const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();
const express = require("express");
const embed = new Discord.MessageEmbed()

const app = express();
app.get("/", (request, response) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
    response.sendStatus(200);
});
app.listen(process.env.PORT);

bot.on("message", msg => {
    if (msg.content === `<@${bot.user.id}>`) {
        let link = ('https://discord.com/users/832014280387854406')
        let link2 = ('https://discord.com/users/820466626456584202')
        let link3 = ('https://discord.com/users/617466677780545562')
        let embed = new Discord.MessageEmbed()
        .setTitle('***Central De Ajuda***')
        .setColor('#e999bf')
        .setDescription(`**Olá, meu nome é Beelzebub, mas pode me chamar de Beel.** \n \n **Fui Criada Por [Kakau](${link})/[Hina](${link2})/[Otsuky](${link3}).** \n \n **Meu prefixo é "b!".**`)

    msg.channel.send(embed);
    }

})

bot.on("message", msg => {
    if (msg.content === `<@!${bot.user.id}>`) {
        let link = ('https://discord.com/users/832014280387854406')
        let link2 = ('https://discord.com/users/820466626456584202')
        let link3 = ('https://discord.com/users/617466677780545562')
        let embed = new Discord.MessageEmbed()
            .setTitle('***Central De Ajuda***')
            .setColor('#e999bf')
            .setDescription(`**Olá, meu nome é Beelzebub, mas pode me chamar de Beel.** \n \n **Fui Criada Por [Kakau](${link})/[Hina](${link2})/[Otsuky](${link3}).** \n \n **Meu prefixo é "b!".**`)

        msg.channel.send(embed);
    }
})


require("./util/eventHandler")(bot)
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();


bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type == 'channel') return;
    if (!message.content.toLowerCase().startsWith(config.prefix)) return;
    if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(bot, message, args);
    } catch (err) {
        const embed = new Discord.MessageEmbed()
            .setColor('#e999bf')
            .setDescription(`${message.author}, Este comando não existe em meu sistema, Em caso for um bug entre em contato com Kakau ᵀᴳᴺ#0354 \n\ Utilize **b!help** para ver meus comandos.`)
        return message.channel.send(embed);
    }
});

bot.login(config.token);