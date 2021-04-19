const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  
  
  
  let prefix = ayarlar.prefix;
 
  let kayıtçı = await db.fetch(`yetkilirolk_${message.guild.id}`)
  
  const kayıtkanalı = await db.fetch(`yetkilikayıtk_${message.guild.id}`)
  if(kayıtkanalı == null) return message.channel.send('');
  if (message.channel.id !== kayıtkanalı) return message.channel.send(`**Sadece Kayıt Kanalından Kayıt Sistemini Kullanabilirsiniz!**`);
  
 if(!message.member.roles.cache.has(kayıtçı))  return message.channel.send('Kayıt yetkili rolü ayarlanmamış veya <@&' + kayıtçı + '> Rolüne sahip değilsin.')
  else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send(`❌|**Yanlış Kullanım!** **|** **Bir Kişi Belirtin!** `)
    const user = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send(`❌|**Yanlış Kullanım!** **|** **Bir İsim Belirtin! **`)
      if(!yas) return message.channel.send(`❌|**Yanlış Kullanım!** **|** **Bir Yaş Belirtin!**`)
    setTimeout(function(){user.roles.add(db.fetch(`üyeroll_${message.guild.id}`))},3000)
    setTimeout(function(){user.roles.remove(db.fetch(`yetkilikayıtalınacak_${message.guild.id}`))},4000)
    user.setNickname(`${nick} ${yas}`)
    const egsecode = new Discord.MessageEmbed()
    .setAuthor("Normal Üye Kaydı Yapıldı!")
    .addField(`Kaydı yapılan\n`, `${user.user.tag}`)
    .addField(`Kaydı yapan\n`, `${message.author.tag}`)
    .addField(`Yeni isim\n`, `${nick} ${yas}`)
    .setFooter(`Kayıt Sistemi`)
    .setColor("RANDOM")
    message.channel.send(` **${message.author} Kayıt İşlemi Başarıyla Yapıldı Ve Log Kanalına Yapılan Kaydın Detaylarını Attım**`)
    db.add(`üyeistatistik${message.author.id}.${message.guild.id}`, 1)
    message.guild.channels.cache.get(db.fetch(`yetkilikayıtlogk_${message.guild.id}`)).send(egsecode)

  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};
exports.help = {
  name: "kayıt",
};
   