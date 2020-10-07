const { prefix } = '>';
const Discord = require('discord.js');


module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	execute(message, args) {
        const data = [];
const { commands } = message.client;

if (!args.length) {
    data.push('Here\'s a list of all my commands:');
data.push(commands.map(command => command.name).join(', '));
data.push(`\nYou can send \`>help [command name]\` to get info on a specific command!`);

return message.channel.send(data, { split: true })
}

const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.name && c.name.includes(name));

if ('${command.name}') {

	const embed = new Discord.MessageEmbed()

	.setTitle(`${command.name}`)
	.addField(`**Description:**` +command.description )
	.addField(`**Usage:** ` +command.usage)

	message.channel.send(embed);


	message.channel.send(data, { split: true });
}
else{return message.reply('that\'s not a valid command!');}




	}
}
