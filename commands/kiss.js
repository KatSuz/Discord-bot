const Discord = require('discord.js');
module.exports= {
    name: 'kiss',
    description: 'kiss someone',
    usage: '>kiss @user',
    execute(message, args) {
    var  kissgif= [
        'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
        'https://media.giphy.com/media/KmeIYo9IGBoGY/giphy.gif',
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
        'https://media.giphy.com/media/11rWoZNpAKw8w/giphy.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
        'https://media.giphy.com/media/kjPs0uwHuc5wc/giphy.gif'
    ]


    var sub = kissgif[Math.round(Math.random() * (kissgif.length - 1))];

    var personTagged = message.mentions.members.first();
    if(!personTagged){
        message.reply('You mention someone or nothing...Stupid human.\n **Usage**: > kiss **@user**')
    }
    const embed = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setDescription('**'+message.author.username+' kissu '+personTagged.displayName+'**')
        .setImage(sub);

    message.channel.send(embed);
}

}
