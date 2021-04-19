const Discord = require('discord.js');//krom code Krom#0516
//krom code Krom#0516
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle("Abone Sistemi")
.addField('m!abonestats','Toplam Verilen Abone Sayısını Gösterir.')
.addField('m!aboneyetkilisiayarla','Abone Yetkilisini Ayarlarsınız.')
.addField('m!abonekanalayarla','Abone Rol Verilecek Kanalı Ayarlarsınız.')
.addField('m!abonerolayarla','Abone Rol Ayarlar.')
.addField('m!abone','Birisine Abone Rolü Verirsiniz.')
.addField('m!abonesistemkapat','Abone Sistemini Kapatırsınız.')
.setFooter('Malware`Bot-Abone Sistemi', client.user.avatarURL())//krom code Krom#0516
.setTimestamp()
.setThumbnail(client.user.avatarURL())//krom code Krom#0516
message.channel.send(embed)//krom code Krom#0516
};
//krom code Krom#0516
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['as'], //krom code Krom#0516
  permLevel: 0 
};

exports.help = {
  name: 'abonesistem',
  description: 'Tüm komutları gösterir.',//krom code Krom#0516
  usage: 'yardım'//krom code Krom#0516
};//krom code Krom#0516