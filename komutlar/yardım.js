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
  \`\`\📣Bilgilendirme📣\`\`\ 
> :notepad_spiral:\`${prefix}istatistik\` **:: Bot Hakkında Bilgileri Görürsünüz.**
> :notepad_spiral:**Şuan Kullanılan Prefix =** \`${prefix}\`
                      \`🔗Yardım Komutları🔗\`
:small_orange_diamond:\`${prefix}moderasyon\` **:: Moderasyon Komutlarını Sıralar!**
:small_orange_diamond:\`${prefix}guard\`      **:: Güvenlik Komutlarını Sıralar!**
:small_orange_diamond:\`${prefix}ky\`         **:: Kayıt Komutlarını Sıralar!**
:small_orange_diamond:\`${prefix}ayarlamalı\` **:: Ayarlamalı Komutları Sıralar **
:small_orange_diamond:\`${prefix}eğlence\`    **:: Eğlence Komutlarını Sıralar!**
:small_orange_diamond:\`${prefix}özel\`       **:: Kurucu Özel Komutları Sıralar!**
:small_orange_diamond:\`${prefix}ceza\`       **:: Ceza Komutlarını Sıralar!**
:small_orange_diamond:\`${prefix}botlists\`   **:: Botlist Komutlarını Sıralar!**
:small_orange_diamond:\`${prefix}abonesistem\`**:: Abone Komutlarını Sıralar!**
`)
.addField(":loudspeaker: • Güncelleme Notları:", "**Güncelleme v0.9** Abone Sistemi Eklendi!")


.setFooter("Botu davet etmek için m!davet")
.setImage("https://cdn.discordapp.com/attachments/821709000977678337/830868381414195280/standard.gif")
.setTimestamp()
message.channel.send(egas)
}
module.exports.conf = {
aliases: ['help']
}

module.exports.help = {
name: "yardım"
}