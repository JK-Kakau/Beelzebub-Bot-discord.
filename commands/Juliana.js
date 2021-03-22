const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.reply ("A garota mais linda de todos os tempos e a mais fofah")
}

module.exports.config = {
    name: "Juliana?",
    description: "Minha princesa :3",
    usage: "b!Juliana",
    accessableby: "Member",
    aliases: ['J']
}