const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let yetkilikayıtkanalı = message.mentions.channels.first()
if (!yetkilikayıtkanalı) return message.channel.send('❌|**Kayıt Kanalını Etiketlemelisin!** ')
   
  db.set(`yetkilikayıtk_${message.guild.id}`, yetkilikayıtkanalı.id)

 
  message.channel.send(`✅|**Kayıt Kanalı Başarıyla ** **${yetkilikayıtkanalı}** **Olarak Ayarlandı!**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'kayıtkanal',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kayıt-kanal <#kanal>'
};