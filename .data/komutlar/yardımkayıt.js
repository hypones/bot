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
:white_small_square:\`${prefix}erkekrol\` **: Erkek Rolünü Ayarlar.**
:white_small_square:\`${prefix}kızrol\` **: Kız Rolünü Ayarlar.**
:white_small_square:\`${prefix}normalrol\` **: Üye Rolünü Ayarlar.**
:white_small_square:\`${prefix}kayıtyetkilirol\` **: Kayıt Eden Rolü Ayarlar.**
:white_small_square:\`${prefix}alınacakrol\` **: Kayıt Olunca Alınan Rolü Ayarlar.**
:white_small_square:\`${prefix}kayıtkanal\` **: Kayıt Kanalını Ayarlar.**
:white_small_square:\`${prefix}kayıtkapat\` **: Kayıt Sistemini Kapatır.**
:white_small_square:\`${prefix}kayıtlog\` **: Kayıt Logu Ayarlar.**
:white_small_square:\`${prefix}kayıtbilgi\` **: Kayıtları Gösterir.**
:white_small_square:\`${prefix}isim\` **: İsim değiştirir.**
:notepad_spiral:|Erkek Kayıt İçin **m!e @kullanıcı isim yaş**|
:notepad_spiral:|Kız Kayıt İçin **m!k @kullanıcı isim yaş**|
:notepad_spiral:|Üye  Kayıt İçin **m!kayıt @kullanıcı isim yaş**|
`)

.setFooter("Botu davet etmek için m!davet")
.setImage("https://cdn.discordapp.com/attachments/821709000977678337/830876999110885389/standard_1.gif")
.setTimestamp()
message.channel.send(egas)
}
module.exports.conf = {
aliases: ['ka']
}

module.exports.help = {
name: "ky"
}