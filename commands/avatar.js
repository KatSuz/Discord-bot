const Discord = require('discord.js');
module.exports= {
    name: 'avatar',
    description: 'see someone avatar',
    usage: '>avatar @user',
    execute(message, args) {
        var personTagged = message.mentions.members.first()|| message.guild.members.cache.get(args[0]) || message.member;

        if(!personTagged){
            message.reply('You mention someone or nothing...Stupid human.\n **Usage**: >avatar @user')
            personTagged.roles.cache.forEach((role) => {
                roles.push(role.name);
            });
        }
        const embed = new Discord.MessageEmbed()

        .setTitle('AVATAR')
        .setColor(message.member.displayHexColor)
        .addField("Nickname:", `${personTagged.nickname !== null ? `${personTagged.nickname}` : 'None'}`, true)
        .addField("Roles", `${personTagged.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:no:425632070036094986> No Roles"}`, true)
        .setFooter(`Replying to ${message.author.username}`);

        message.channel.send(embed);
}

}
