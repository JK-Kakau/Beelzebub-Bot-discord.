const Discord = require("discord.js")

module.exports = bot => {
    console.log(`${bot.user.username} Está online`)
    bot.user.setActivity("Olá a todos", {type: "STREAMING", url:"https://www.twitch.tv/the_garden10k"});
}