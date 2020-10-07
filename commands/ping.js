// client.on('message',function(message) {
//     if(message.author.bot) return;
//     if(message.content === 'Hello') {
//         message.reply('Hello human!');
//     }
//     if(message.content.toLowerCase().startsWith(PREFIX + "ping")){
//         message.channel.send("Stop testing me human...");
//     }
// });
module.exports = {
	name: 'ping',
	description: 'Ping!',
	usage: '>ping',
	execute(message, args) {
		message.channel.send('Pong.');
	}

}
