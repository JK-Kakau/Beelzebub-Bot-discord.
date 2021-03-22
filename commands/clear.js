module.exports.run = async (bot, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    
    if(!message.member.permissions.has("MANAGE_MESSAGE")) return message.channel.send('Você precisa de mais permissões para execultar este comando.');

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Insira um número válido') }

    if (parseInt(args[0]) > 99) {
       return message.reply('Você só pode excluir 99 mensagens por vez')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount +1, true);
    message.reply(`**Foram deletadas** ${deleteAmount} **Mensagens deste canal.**<a:yes:818832899045982258> `)
}

module.exports.config = {
    name: "clear",
    usage: "b!clear",
    aliases: []
}