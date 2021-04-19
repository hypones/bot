const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let erkekrol = message.mentions.roles.first()
  if (!erkekrol) return message.channel.send('❌|**Lütfen Erkek Rolünü Etiketle!**')
   
  db.set(`erkekrolk_${message.guild.id}`, erkekrol.id)
  message.channel.send(`✅|**Erkek Rolü Başarıyla** **${erkekrol}** **Olarak Ayarlandı!** `)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'erkekrol',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};