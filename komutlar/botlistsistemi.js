const Discord = require('discord.js');
exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle('Bot List Sistemi')
.setDescription(`:book:  __**ANA BOTLİST KOMUTLARI**__  :book:\n \n :pushpin:  m!bot ekle = Bot eklersiniz \n \n:pushpin:  m!bot onayla = Bot onaylarsınız \n \n:pushpin:  m!bot reddet = Bot reddedersiniz \n \n:pushpin:  m!bot bilgi = Bot hakkında bilgi alırsınız \n \n :tools:  __**BOTLİST AYARLAMA KOMUTLARI**__  :tools: \n \n:pushpin:  m!botlist ayarlar = Botlist ayarlarını görürsünüz \n \n  :pushpin:  m!botlist kanal = Botlist kanal ayarlarsınız \n \n :pushpin:  m!botlist devepoler-rol = Botlist devepoler rol ayarlarsınız \n \n :pushpin:  m!botlist yetkili-rol = Botlist yetkili rol ayarlarısınız \n \n :pushpin:  m!botlist log = Botlist log ayarlarsınız \n \n :pushpin:  m!botlist başvuru-log = Botlist başvuru log ayarlarsınız \n \n :pushpin:  m!botlist dm-takip = Botlist dm takip sistemini ayarlarsınız`)
.setImage("https://cdn.discordapp.com/attachments/833059645685891112/833073160085569556/botllist.gif")
return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bls'],
  permLevel: 0
};

exports.help = {
  name: 'botlists'
};