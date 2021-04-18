const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`❌|Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`KickLog Kanalı Ayarlı Değil.`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`KickLog Kanalı Başarıyla Sıfırlandı.`);
  
    return
  }
  
if (!logk) return message.channel.send(`Bir KickLog Kanalı Belirtmelisin.`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`Kick-Log Kanalı Başarıyla ${logk} Olarak Ayarlandı.`);
 message.react('755840251066581012')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2 ,//Kendi permlerinize göre ayarlayın,
};

exports.help = {
    name: 'kicklog'
};
   