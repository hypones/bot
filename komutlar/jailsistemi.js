const Discord = require('discord.js');//krom code Krom#0516
//krom code Krom#0516
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle("Jail Sistemi")
.addField('m!jailrol','Jail Rolünü Ayarlarsınız.')
.addField('m!jailyetkili','Jail Yetkilisi Ayarlarsınız.')
.addField('m!jaillog','Jail Logunu Ayarlarsınız.')
.addField('m!jailalınacakrol','Jaile Atılırken Alınacak Rolü Belirler.')
.addField('m!jail','Birisini jaile atarsınız.')
.setFooter('Marwale`Bot-Jail Sistemi', client.user.avatarURL())//krom code Krom#0516
.setTimestamp()
.setThumbnail(client.user.avatarURL())//krom code Krom#0516
message.channel.send(embed)//krom code Krom#0516
};
//krom code Krom#0516
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], //krom code Krom#0516
  permLevel: 0 
};

exports.help = {
  name: 'jailsistemi',
  description: 'Tüm komutları gösterir.',//krom code Krom#0516
  usage: 'yardım'//krom code Krom#0516
};//krom code Krom#0516