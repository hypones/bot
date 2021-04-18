const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let rol = message.mentions.roles.first()
let kisi = message.mentions.members.first()
if(!rol) return message.channel.send("Vermem için bir rol belirtin.")
if(!kisi) return message.channel.send("Rol vermem için bir kişi etiketleyin.")
kisi.roles.add(rol) //WenSamitaNeiva
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rol-ver'],
  permLevel: 0
};

exports.help = {
  name: 'rolver',
  description: "Loz 'Bey ** WenSamita Neiva Sunucu Heykleme Kodu",
  usage: 'rolver'
};