const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Marwale`Bot Davet!")
  .setDescription("[__**Davet Et**__](https://discord.com/api/oauth2/authorize?client_id=693978730355359746&permissions=8&scope=bot) ")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mdavet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};