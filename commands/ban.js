const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS'))
    message.channel.send("Você não tem permissão para execultar este comando.");
    else {
        let bannedMember = await message.guild.members.ban(args);
            if(bannedMember)

        try {
            console.log(bannedMember.tag + "Foi banido.");
            message.channel.send (`${bannedMember} **Foi banido do servidor.**`)
        }
        catch(err) {
            console.log(err);
        }
    }

}

module.exports.config = {
    name: "ban",
    description: "Banir usuários",
    usage: "b!ban",
    accessablebly: "Admins",
    aliases: []
}