const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {


    const user = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase())
    const ROLES = message.guild.member(user.id).roles.cache.filter((r) => r.id !== message.guild.id).map((roles) => roles);
    const userI = message.guild.member(user.id);

    let roles;
    if(!ROLES.length) roles = "Nenhum Cargo"
    else roles = ROLES.length > 10 ? ROLES.map((r) => r).slice(0, 10).join(", ") + `e mais **${ROLES.length - 10}** cargos.` : ROLES.map((r) => r).join(", ");

    function Device(user) {
        if(!user.presence.clientStatus) return null;
        let devices = Object.keys(user.presence.clientStatus);

        let deviceList = devices.map((x) => {
            if(x === "Desktop") return "COMPUTADOR";
            else if(x === "mobile") return "CELULAR"
            else return "BOT";
        })

        return deviceList.join(" - ");
    }

    let presence;
    if(!user.presence.activities.length) presence = "Não está jogando nada"
    else presence = user.presence.activities.join(", ");

    const device = Device(user);
    const joined = `${moment(userI.joinedAt).format("L")} ( ${moment((userI).joinedAt).startOf('day').fromNow()} )`
    const createdAt = `${moment(client.users.cache.get(user.id).createdAt).format("L")} ( ${moment(client.users.cache.get(user.id).createdAt).startOf('day').fromNow()} )`

    const USERINFO = new Discord.MessageEmbed()
    .setAuthor(user.user.username, user.user.displayAvatarURL({dynamic: true}))
    .addFields(
        {name: "Jogando:", value: `\`\`\`diff\n- ${presence}\`\`\``},
        {name: "Nome do Usuário:", value: user.user.tag, inline: true},
        {name: "Nickname no Servidor:", value: (!!userI.nickname ? userI.nickname : "Nenhum Nickname"), inline: true},
        {name: "ID do usuário", value: user.id},
        {name: "Conta Criada:", value: created, inline: true},

        {name: "Entrada no Servidor:", value: joined, inline: true},
        {name: "Dispositivo:", value: String(device).replace("null", "Nenhum")},
        {name: "É bot?", value: user.user.bot ? "Sim" : "Não", inline: true}
    )
    .setcolor('#f47fff')
    .setTimestamp()
    .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
    .setFooter(`Pedido por: ${message.author.tag} || ID: ${message.author.id}`, message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(USERINFO)

}

module.exports.config = {
    name: "userinfo",
    description: "Ver informações sobre um usuário",
    usage: "b!userinfo",
    accessablebly: "Members",
    aliases: ['ui']
}