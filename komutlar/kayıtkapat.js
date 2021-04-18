const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(' **Bu Özelliği Kullanabilmek İçin `Yönetici` Yetkisine Sahip Olmalısınız!** ')

  if(!db.fetch(`yetkilikayıtk_${message.guild.id}`)) return message.channel.send(' **Görünüşe Göre Kayıt Sistemi Zaten Kapalı Görünüyor!**')
   

   message.reply('✅|**Kayıt Sistemi Ayarları Sıfırlanıp Başarı İle Kapatılmıştır!** ')
db.delete(`erkekrolk_${message.guild.id}`)   
db.delete(`kadınrolk_${message.guild.id}`)
db.delete(`yetkilikayıtk_${message.guild.id}`)
db.delete(`yetkilikayıtalınacak_${message.guild.id}`)
db.delete(`yetkilikgirismesajı_${message.guild.id}`)
db.delete(`yetkilikayıtlogk_${message.guild.id}`)

}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'kayıtkapat', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};