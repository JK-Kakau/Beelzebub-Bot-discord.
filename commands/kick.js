const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
    message.channel.send("**Você precisa de mais permissões para execultar este comando.**");
    else {
        let member = message.guild.members.cache.get(args);
        if(member) {
            try {
                await member.kick();
                console.log('Kicked');
                message.channel.send(`${member}, Foi kickado do servidor`)
            }
            catch(err) {
                console.log(err);
            }
        }
}
}

module.exports.config = {
    name: "kick",
    description: "Dar kick no usuário mencionado",
    usage: "b!kick",
    accessableby: "Admins",
    aliases: []
}