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
:white_small_square:\`${prefix}kick\` **:: Belirtilen Kişiyi Kickler.**
:white_small_square:\`${prefix}nuke\` **:: Kanalı Nukeler.**
:white_small_square:\`${prefix}uyarı\` **:: Warn Sistemidir.**
:white_small_square:\`${prefix}ping\` **:: Botun Pingini Gösterir.**
:white_small_square:\`${prefix}yavaşmod\` **:: Yavaş Mod Ayarlar.**
:white_small_square:\`${prefix}lionbotdavet\` **:: LionBot Davet Linki.**
:white_small_square:\`${prefix}sil\` **:: Mesaj Siler.**
:white_small_square:\`${prefix}avatar\` **:: Avatarı Gösterir.**
:white_small_square:\`${prefix}isim\` **:: İsim değiştirir.**
:white_small_square:\`${prefix}say\` **:: Sunucuyu Sayar.**
:white_small_square:\`${prefix}i\` **:: Bot İstatistiklerini Atar.**
:white_small_square:\`${prefix}profil\` **:: Kendi Profilinizi Gösterir.**,
`)

.setFooter("Botu davet etmek için .davet")
.setTimestamp()
message.channel.send(egas)
}
module.exports.conf = {
aliases: ['mod']
}

module.exports.help = {
name: "moderasyon"
}