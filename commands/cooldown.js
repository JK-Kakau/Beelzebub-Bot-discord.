const usedCommand = new Set();

module.exports.run = async (bot, message, agrs) => {
    message.delete().catch(O_o => {});
    if(usedCommand.has(message.author.id)){
         message.reply('Você não pode usar o comando por causa do cooldown ativo neste servidor.')
    } else {
        message.reply('O modo **cooldown** em comandos foi ativado')


        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000);
    }
}

module.exports.config = {
    name: "cooldown",
    description: "Coloque um tempo para usar meus comandos",
    usage: "b!cooldown",
    accessableby: "members",
    aliases: []
}