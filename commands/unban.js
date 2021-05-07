const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    let avatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024});
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Você não tem permissão para usar este comando.')

    const Id = new Discord.MessageEmbed()
    .setTitle("> **Insira Um Id Válido**")
    .setColor('#e999bf')
    if (!args[0]) return message.channel.send(Id);

    let member;

    try {
        member = await bot.users.fetch(args[0])
    } catch (e) {
        console.log(e)
        const inv = new Discord.MessageEmbed()
        .setTitle("> **Insira Um Id Válido**")
        .setColor('#e999bf')
        return message.channel.send(inv);
    }

    const reason = args[1] ? args.slice(1).join(' ') : "Sem motivo";

    let embed = new Discord.MessageEmbed()
    .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true}));

    message.guild.fetchBans().then( bans => {

        const user = bans.find(ban => ban.user.id === member.id);

        if(user) {
            embed.setColor('#e999bf')
            .setThumbnail(avatar)
            .addField(' <:829440834004844574:838050952938127391> Usuário', user.user.tag)
            .addField(' <:829440638688165948:838050953256894464> Id', user.user.id)
            .addField(' <:829442848113819689:838050953445376001> Motivo Ban', user.reason != null ? user.reason : 'Motivo Não Informado')
            .addField(' <:829442848113819689:838050953445376001> Motivo Desban', reason)
            .addField(' <a:829440211171016756:838050953231466537> Banir', 'b!ban (Mencione O Usuário) (Motivo)')
            message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
        } else {
            embed.setTitle(`**Usuário** ${member.tag} **Não Está Banido**`)
            .setColor('#e999bf')
            message.channel.send(embed)
        }
    }).catch(e => {
        console.log(e)
        const Err = new Discord.MessageEmbed()
        .setTitle("> **Insira um motivo válido.**")
        .setColor('#e999bf')
        message.channel.send(Err);
    });
}

module.exports.config = {
    name: "unban",
    usage: "b!unban",
    aliases: []
}