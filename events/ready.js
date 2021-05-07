const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = bot => {
    console.log(`${bot.user.username} Está online`)

        const arrayOfStatus = [
            `${bot.users.cache.size} Usuários`,
            `${bot.guilds.cache.size} Servidores`,
            `${bot.channels.cache.size} Canais`,
            `\🔎 Prefix "b!"`,
            `14/05 V2.0`,
            `\💻Sendo Programada`
            
        ];

        let index = 0
        setInterval(() => {
        if(index == arrayOfStatus.length) index = 0
        const status = arrayOfStatus[index];
        console.log(status);
        bot.user.setActivity(status, {type: "STREAMING", url: "https://www.twitch.tv/the_garden10k"}).catch(console.error)
        index++;
    }, 2000)
}