const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const botadi = "Narwale`Bot"

let prefix = ayarlar.prefix
exports.run = function(client, message) {
const egse = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle("Kick Sistemi")
.addField(`${prefix}kicklog`,'Kick Logunu Ayarlarsınız.')
.addField(`${prefix}kick`,'Birisini Kicklersiniz.')
.setFooter(`${botadi} Jail Sistemi`, client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(egse)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'kicksistemi',
};