const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let yetkilikayıtalınacakrol = message.mentions.roles.first()
  if (!yetkilikayıtalınacakrol) return message.channel.send('❌|**Lütfen Kayıt Sırasında Alıncak Rolü Etiketle!** ')
   
  db.set(`yetkilikayıtalınacak_${message.guild.id}`, yetkilikayıtalınacakrol.id)
  message.channel.send(`✅|**Kayıt Sırasında Alınacak Rol** **${yetkilikayıtalınacakrol}** **Olarak Ayarlandı!**  `)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'alınacakrol',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};