const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => {});
    let avatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024});
    let embed = new Discord.MessageEmbed()
    .setDescription(`
    <:1BZ:834052249462243339> **Moderação**

    <:2BZ:834052249524240385> **Diversão** 

    <:3BZ:834052249402998805> **Informação** 
    
    <:4BZ:834058789689884752> **Utilidades**`)
    .setFooter('Reaja De Acordo Com A Categoria Que Deseja')
    .setThumbnail('https://media.discordapp.net/attachments/832980242967822347/834151706169966602/7db86bfb0b92a366cfcc1b3d5fe08e3f_2.png?width=467&height=518')
    .setImage('https://images-ext-1.discordapp.net/external/1VhHpHExKWCkrIppJMeFQQVVNxlqtATaQKEPkK6yqYE/https/media.discordapp.net/attachments/818262215689109544/834150850251194368/296_Sem_Titulo_20210420163728.png')
    .setColor('#e999bf')
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL(
        {format: "png"}));
    message.channel.send(embed).then(msg => {
        msg.react("834136284078538823")
         msg.react("834052249462243339")
         msg.react("834052249524240385")
         msg.react("834052249402998805")
         msg.react("834058789689884752")
         msg.react("834137956646125649")

        let filtro0 = (r, u) => r.emoji.id === '834136284078538823' && u.id === message.author.id;
        let filtro1 = (r, u) => r.emoji.id === '834052249462243339' && u.id === message.author.id;
        let filtro2 = (r, u) => r.emoji.id === '834052249524240385' && u.id === message.author.id;
        let filtro3 = (r, u) => r.emoji.id === '834052249402998805' && u.id === message.author.id;
        let filtro4 = (r, u) => r.emoji.id === '834058789689884752' && u.id === message.author.id;
        let filtro5 = (r, u) => r.emoji.id === '834137956646125649' && u.id === message.author.id;

        let coletor0 = msg.createReactionCollector(filtro0);
        let coletor1 = msg.createReactionCollector(filtro1);
        let coletor2 = msg.createReactionCollector(filtro2);
        let coletor3 = msg.createReactionCollector(filtro3);
        let coletor4 = msg.createReactionCollector(filtro4);
        let coletor5 = msg.createReactionCollector(filtro5);

        coletor0.on("collect", c => {
            let embed = new Discord.MessageEmbed()
            .setDescription(`
            <:1BZ:834052249462243339> **Moderação**
        
            <:2BZ:834052249524240385> **Diversão** 
        
            <:3BZ:834052249402998805> **Informação**
            
            <:4BZ:834058789689884752> **Utilidades**`)
            .setFooter('Reaja De Acordo Com A Categoria Que Deseja')
            .setImage('https://images-ext-1.discordapp.net/external/1VhHpHExKWCkrIppJMeFQQVVNxlqtATaQKEPkK6yqYE/https/media.discordapp.net/attachments/818262215689109544/834150850251194368/296_Sem_Titulo_20210420163728.png')
            .setThumbnail('https://media.discordapp.net/attachments/832980242967822347/834151706169966602/7db86bfb0b92a366cfcc1b3d5fe08e3f_2.png?width=467&height=518')
            .setColor('#e999bf')
            .setFooter(`${message.author.tag}`, message.author.displayAvatarURL(
                {format: "png"}));
            msg.edit(embed)
        
        })

        coletor1.on("collect", c => {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Comandos De Moderação`)
            .setDescription(`<a:SetaR:834051220544028703> **b!ban** Banir O Usuário.\n \n <a:SetaR:834051220544028703> **Unban** Desbanir Um Usuário. \n \n <a:SetaR:834051220544028703> **b!kick** Expulsar Um Usuário Do Servidor. \n \n <a:SetaR:834051220544028703> **b!clear** Limpar As Mensagens De Um Servidor. \n \n <a:SetaR:834051220544028703> **b!lock** Bloquear O Chat. \n \n <a:SetaR:834051220544028703> **b!unlock** Desbloquear O Chat.\n \n <a:SetaR:834051220544028703> **b!slowmode** Ativar O Modo Lento No Chat. \n \n Em Breve Lançaremos mais comandos.`)
            .setColor('#e999bf')

            msg.edit(embed)
        })

        coletor2.on("collect", c => {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Comandos De Diversão`)
            .setDescription(`<a:SetaR:834051220544028703> **b!kiss** Beije Um Usuário. \n \n Em Breve Lançaremos Mais Comandos.`)
            .setColor('#e999bf')

            msg.edit(embed)
        })

        coletor3.on("collect", c => {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Comandos De Informações`)
            .setDescription(`<a:SetaR:834051220544028703> **b!botinfo** Veja As Informações Sobre O Bot. \n \n <a:SetaR:834051220544028703> **b!userinfo** Veja As Informações Sobre Um Usuário. \n \n <a:SetaR:834051220544028703> **b!uptime** Ver O Tempo Que Eu Estou On. \n \n <a:SetaR:834051220544028703> **b!ping** Ver O Meu Ping. \n \n <a:SetaR:834051220544028703> **b!clima** Veja O Clima De Uma Cidade \n \n Em Breve Lançaremos mais comandos.`)
            .setColor('#e999bf')

            msg.edit(embed)
        
    })
    coletor4.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos De Utilidades`)
        .setDescription(`<a:SetaR:834051220544028703> **b!say** Faça O Bot Falar Algo. \n \n <a:SetaR:834051220544028703> **b!invite** Pegue O Invite Do Bot. \n \n <a:SetaR:834051220544028703> **b!suges** Crie Uma Sugestão. \n \n <a:SetaR:834051220544028703> **b!avatar** Veja O Avatar De Alguém.\n \n <a:SetaR:834051220544028703> **b!help** Veja O Comando De Help. \n \n Em Breve Lançaremos mais comandos.`)
        .setColor('#e999bf')

        msg.edit(embed)
    
})

coletor5.on("collect", c => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Criadores Da Team TGN & Beelzebub')
    .setURL('https://discord.gg/9wFWNz9dqt')
    .setDescription('**TGN é um grupo de programadores que tem como objetivo, fazer um bot reconhecido no discord por todos.**')
    .setColor('#e999bf')
    .setThumbnail('https://media.discordapp.net/attachments/832980242967822347/834151706169966602/7db86bfb0b92a366cfcc1b3d5fe08e3f_2.png?width=467&height=518')
    .setImage('https://media.discordapp.net/attachments/738500081358995468/818881668596236348/unknown.png')
    .setFooter('Team ᵀᴳᴺ: | </! Kakau ᵀᴳᴺ> | ᵀᴳᴺ Jujuba 使 | Otsukyw |')

    msg.edit(embed)

})
})
}

module.exports.config = {
    name: "help",
    description: "Informa meus comandos.",
    usage: "b!help",
    aliases: []
}
