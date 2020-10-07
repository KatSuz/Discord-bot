const Discord = require('discord.js');
const client = new Discord.Client();

module.exports= {
    name: 'hug',
    description: 'hug someone',
    usage: '>hug @user',
        execute(message, args) {
        var  kissgif= [
            'https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif',
            'https://media.giphy.com/media/NIZKr6XAQWhJC/giphy.gif',
            'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
            'https://media.giphy.com/media/H5rRRuuANG98I/giphy.gif',
            'https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif',
            'https://media.giphy.com/media/fLv2F5rMY2YWk/giphy.gif',
            'https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif',
            'https://media.giphy.com/media/JLovyTOWK4cuc/giphy.gif',
            'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif'
        ]


        var sub = kissgif[Math.round(Math.random() * (kissgif.length - 1))];

        var personTagged = message.mentions.members.first();
        if(!personTagged){
            message.reply('You mention someone or nothing...Stupid human.\n **Usage**: >hug @user')

        }
        const embed = new Discord.MessageEmbed()
            .setColor(0xff0000)
            .setDescription('**'+message.author.username+' is hugging '+personTagged.displayName+'**')
            .setImage(sub);

        message.channel.send(embed);

}
}
