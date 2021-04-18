const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply('Bu komutu kullanabilmek için SUNUCUYU_YÖNET iznine sahip olmalısın!');
  if (!args[0]) return message.reply(`Yapılacak işlemi belirtmelisin!\n\`${this.help.usage}\``);
  let sayac = db.get(`sayac.${message.guild.id}`);
  if (args[0] === "sıfırla") {
    if (!sayac) return message.reply('❌|Sayaç ayarlanmamış!');
    db.delete(`sayac.${message.guild.id}`);
    message.reply('✅|Başarıyla sayaç sıfırlandı!');
    return;
  };
  
  let kanal = message.mentions.channels.first();
  let sayi = args[1];
  if (!kanal || !sayi || isNaN(sayi)) return message.reply(`❌|Sayacı düzgün ayarlamalısın!\nDoğru Kullanım: \`${this.help.usage}\``);
  if (sayi < message.guild.memberCount) return message.reply(`❌|Girdiğin sayaç hedefi, sunucunun toplam üyesinden düşük! (${message.guild.memberCount})`);
  db.set(`sayac.${message.guild.id}`, {kanal: kanal.id, sayi: Number(sayi)});
  message.reply(`✅|Başarıyla sayaç kanalı  ${kanal} olarak, sayaç sayısı ise **${sayi}** olarak ayarlandı!`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = { 
  name: 'sayaç', 
  description: 'Üye katıldığın da veya ayrıldıgında sayar.',
  usage: 'sayaç #kanal [sayı]/sıfırla',
  kategori: 'yetkili'
};