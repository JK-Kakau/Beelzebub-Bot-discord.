const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    let avatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024});

    const perm = new Discord.MessageEmbed()
    .setTitle("> **Ops, acabei de reparar que você não tem permissão para dar kick.**")
    .setColor('#e999bf')
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(perm)

    const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 

    const id = new Discord.MessageEmbed()
    .setTitle("> **Ops, você não mencionou e nem usou o id de alguém para dar kick.**")
    .setColor('#e999bf')
    if(!args[0]) return message.channel.send(id)

const Mention = new Discord.MessageEmbed()
    .setTitle("> **Ops, você não mencionou e nem usou um id válido, para dar kick em alguém.**")
    .setColor('#e999bf')
    if (!membro) return  message.channel.send(Mention);   


    
    
    const kickable = new Discord.MessageEmbed()
    .setTitle(`> **Ops, eu não consegui dar kick o(a) usuário(a), talvez ele(a) contenha um cargo maior que o meu, ou eu mesma não contenha permissões para dar kick.**`)
    .setColor('#e999bf')

    if(!membro.kickable)
    return message.channel.send(kickable)

    const auto = new Discord.MessageEmbed()
    .setTitle("> **Ksksks, você não pode se dar kick bobinho(a).**")
    .setColor('#e999bf')
    if (membro == message.member) return  message.channel.send(auto);

    let motivo = args.slice(1).join(" ");
    const Mo = new Discord.MessageEmbed()
    .setTitle("> **ops, Insira um motivo.**")
    .setColor('#e999bf')
    if (!motivo) return  message.channel.send(Mo);


    const cargo = new Discord.MessageEmbed()
    .setTitle("> **ops, você não pode dar kick pessoas que contenham o mesmo cargo que o seu, ou até mesmo maior que o seu.** \n > **obs: (kskssk tome cuidado para não tomar ban devolta.)**")
    .setColor('#e999bf')
    let authorHighestRole = message.member.roles.highest.position;
    let membroHighestRole = membro.roles.highest.position;
    if(membroHighestRole >= authorHighestRole) {
        message.channel.send(cargo)
        return;
    }

    const dm = new Discord.MessageEmbed()
            .setTitle('Infelizmente você foi kickado.')
            .setThumbnail(message.guild.iconURL({dynamic: true}))
            .addField('Moderador', `\`${message.author.tag}\``)
            .addField('Moderador ID', `\`${message.author.id}\``)
            .addField('Servidor', `\`${message.guild.name}\``)
            .setColor('#e999bf')
            .setTimestamp()
            .setFooter('会 ୧ Beelzebub\🌸 Bot')

    const embed = new Discord.MessageEmbed()
    .setDescription(`**Você deseja dar kick em** ${membro}?`)
    .addField('**Reaja Com Sabedoria.**', "<:739390356679950388:838069167487057970> **Sim**")
    .setColor('#e999bf');
    message.channel.send(embed).then(msg => {
        msg.react("<:739390356679950388:838069167487057970>");

        let filtro = (reaction, usuario) => reaction.emoji.id === "838069167487057970" && usuario.id === message.author.id;
        const coletor = msg.createReactionCollector(filtro, {max: 1, time: 3600000});

        coletor.on("collect", em => {
            em.remove(message.author.id);
             membro.kick()
            let embed = new Discord.MessageEmbed()
            .addField('<:829440834004844574:838050952938127391> Membro Kickado:', `${membro}`)
            .addField('<:829440638688165948:838050953256894464> Membro ID', membro.user.id)
            .addField('<:829439176691679233:838050953001304154> Moderador', `${message.author}`, )
            .addField('<:829440638688165948:838050953256894464> Moderador ID', `${message.author.id}`)
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
    name: "b!kick",
    usage: "b!kick",
    aliases: []
}