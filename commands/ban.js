const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    let avatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024});

    const perm = new Discord.MessageEmbed()
    .setTitle("> **Ops, acabei de reparar que você não tem permissão para banir.**")
    .setColor('#e999bf')
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(perm)

    const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 

    const id = new Discord.MessageEmbed()
    .setTitle("> **Ops, você não mencionou e nem usou o id de alguém para banir.**")
    .setColor('#e999bf')
    if(!args[0]) return message.channel.send(id)

const Mention = new Discord.MessageEmbed()
    .setTitle("> **Ops, você não mencionou e nem usou um id válido, para banir alguém.**")
    .setColor('#e999bf')
    if (!membro) return  message.channel.send(Mention);   


    
    
    const bannable = new Discord.MessageEmbed()
    .setTitle(`> **Ops, eu não consegui banir o(a) usuário(a), talvez ele(a) contenha um cargo maior que o meu, ou eu mesma não contenha permissões para banir.**`)
    .setColor('#e999bf')

    if(!membro.bannable)
    return message.channel.send(bannable)

    const auto = new Discord.MessageEmbed()
    .setTitle("> **Ksksks, você não pode se banir bobinho(a).**")
    .setColor('#e999bf')
    if (membro == message.member) return  message.channel.send(auto);

    let motivo = args.slice(1).join(" ");
    const Mo = new Discord.MessageEmbed()
    .setTitle("> **ops, Insira um motivo.**")
    .setColor('#e999bf')
    if (!motivo) return  message.channel.send(Mo);


    const cargo = new Discord.MessageEmbed()
    .setTitle("> **ops, você não pode banir pessoas que contenham o mesmo cargo que o seu, ou até mesmo maior que o seu.** \n > **obs: (kskssk tome cuidado para não tomar ban devolta.)**")
    .setColor('#e999bf')
    let authorHighestRole = message.member.roles.highest.position;
    let membroHighestRole = membro.roles.highest.position;
    if(membroHighestRole >= authorHighestRole) {
        message.channel.send(cargo)
        return;
    }

    const dm = new Discord.MessageEmbed()
            .setTitle('Infelizmente você foi banido.')
            .setThumbnail(message.guild.iconURL({dynamic: true}))
            .addField('Moderador', `\`${message.author.tag}\``)
            .addField('Motivo', `\`${motivo}\``)
            .addField('Servidor', `\`${message.guild.name}\``)
            .setColor('#e999bf')
            .setTimestamp()
            .setFooter('会 ୧ Beelzebub\🌸 Bot')

    const embed = new Discord.MessageEmbed()
    .setDescription(`**Você deseja banir** ${membro}?`)
    .addField('**Reaja Com Sabedoria.**', "<:739435623051427861:838069167763488778> **Sim**")
    .setColor('#e999bf');
    message.channel.send(embed).then(msg => {
        msg.react("<:739435623051427861:838069167763488778>");

        let filtro = (reaction, usuario) => reaction.emoji.id === "838069167763488778" && usuario.id === message.author.id;
        const coletor = msg.createReactionCollector(filtro, {max: 1, time: 3600000});

        coletor.on("collect", em => {
            em.remove(message.author.id);
             membro.ban({reason: `${motivo}`})
            let embed = new Discord.MessageEmbed()
            .addField('<:829440834004844574:838050952938127391> Membro Banido:', `${membro}`)
            .addField('<:829440638688165948:838050953256894464> Membro ID', membro.user.id)
            .addField('<:829439176691679233:838050953001304154> Moderador', `${message.author}`, )
            .addField('<:829440638688165948:838050953256894464> Moderador ID', `${message.author.id}`)
            .addField(`<:829442848113819689:838050953445376001> Motivo:`, `${motivo}`,)
            .addField(`<a:829440211171016756:838050953231466537> Desbanir`, 'b!unban (ID) (Motivo)')
            .setFooter('会 ୧ Beelzebub🌸 Bot')
            .setTimestamp()
            .setThumbnail(avatar)
            .setColor('#e999bf')
             message.channel.send(embed);
            membro.send(dm);
            
            
        })

    });
}
module.exports.config = {
    name: "ban",
    description: "Banir usuários",
    usage: "b!ban",
    accessablebly: "Admins",
    aliases: []
}