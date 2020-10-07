//nodemon bot.js
const fs = require('fs');
require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
client.commands = new discord.Collection();
const PREFIX = process.env.PREFIX;
client.login(process.env.BOT_TOKEN);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Logged in as ' + client.user.tag);
	client.user.setActivity("the world colaspsing", {
    type: "WATCHING",
    name: "itt"
  });


})

client.on('message', message => {

    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

	const args = message.content.slice(PREFIX.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
	}

});


//
//
// client.user.setActivity('>help | Serving Master',{
// name: "with Natsu",
// type: "Playing"
// })
