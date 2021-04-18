const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const egas = new Discord.MessageEmbed()
  .addField(`**İşte Pingim!**` ,`${client.ws.ping}ms`)
  message.channel.send(egas)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping(Bunuda Almayında)',
  usage: 'ping'
}; 