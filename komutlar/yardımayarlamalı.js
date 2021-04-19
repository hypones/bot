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
:white_small_square:\`${prefix}saas\` **:: Sa As Sistemi Açar.**
:white_small_square:\`${prefix}küfürengel\` **:: Küfür Engel Sistemi Açar.**
:white_small_square:\`${prefix}reklamengel\` **:: Reklam Engel Sistemi Açar.**
:white_small_square:\`${prefix}everhereengel\` **:: Everyone Here Engel Sistemi Açar.**
:white_small_square:\`${prefix}otorol\` **:: Otorol Sistemi Açar.**
:white_small_square:\`${prefix}sayaç\` **:: Sayaç Sistemi Açar.**
:white_small_square:\`${prefix}hg-bb\` **:: Hoşgeldin Görüşürüz Mesajı Atar.**
:white_small_square:\`${prefix}modlog\` **:: Modlog Sistemi Ayarlar.**
:white_small_square:\`${prefix}modlogsıfırla\` **:: Modlog Sistemini Kapatır.**
:white_small_square:\`${prefix}ototag\` **:: Sunucuya Gelenlere Oto Tag verir**
:white_small_square:\`${prefix}ototagkanal\` **:: Oto Tag Logunu Ayarlarsınız.**
:white_small_square:\`${prefix}güvenlik\` **:: Güvenli Güvensiz Diye Ayırır.**
__NOT__:**Oto tag kapanmıyor!**
:white_small_square:\`${prefix}sunucukur\` ** :: Sunucu Kurarsınız. (Kayıt Sistemli)**
`)

.setFooter("Botu davet etmek için m!davet")
.setTimestamp()
message.channel.send(egas)
}
module.exports.conf = {
aliases: ['ay']
}

module.exports.help = {
name: "ayarlamalı"
}