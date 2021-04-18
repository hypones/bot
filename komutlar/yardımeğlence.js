const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();

module.exports.run= async(client, message, args) => {
   let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "m!";
let egas = new Discord.MessageEmbed()
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`
:white_small_square:\`${prefix}oylama\` **:: Oylama Yapar.**
:white_small_square:\`${prefix}balıktut\` **:: Balık Tutar.**
:white_small_square:\`${prefix}espri\` **:: Espri yapar.**
:white_small_square:\`${prefix}hesapla\` **:: Matematik Yapar.**
:white_small_square:\`${prefix}tokatat\` **:: Tokat Atar.**
:white_small_square:\`${prefix}kasaaç\` **:: Cs:go kasa açarsınız.**
:white_small_square:\`${prefix}kapaklaf **:: Laf Sokarsınız.**

`)

.setFooter("Botu davet etmek için m!davet")
.setTimestamp()
message.channel.send(egas)
}
module.exports.conf = {
aliases: ['eğ']
}

module.exports.help = {
name: "eğlence"
}