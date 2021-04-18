const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args) => {
  let kayıtçı = db.fetch(`yetkilirolk_${message.guild.id}`)
  
  const kayıtkanalı = await db.fetch(`yetkilikayıtk_${message.guild.id}`)
  if(kayıtkanalı == null) return message.channel.send('');
  if (message.channel.id !== kayıtkanalı) return message.channel.send(`**Sadece Kayıt Kanalından Kayıt Edebilirsiniz!**`);
  
 if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım ! `) 
  else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("❌|**Yanlış Kullanım!** **|** __**m!e @Kişi İsim Yaş**__ ")
    const user = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send(" **Yanlış Kullanım!** **|** __**.e @Kişi İsim Yaş**__")
      if(!yas) return message.channel.send(" **Yanlış Kullanım!** **|** __**.e @Kişi İsim Yaş**__")
    setTimeout(function(){user.roles.add(db.fetch(`erkekrolk_${message.guild.id}`))},3000)
    setTimeout(function(){user.roles.remove(db.fetch(`yetkilikayıtalınacak_${message.guild.id}`))},4000)
    user.setNickname(`${nick} ${yas}`)
    const embed = new Discord.MessageEmbed()
    .setAuthor("Erkek Üye Kaydı Yapıldı!")
    .addField(`Kaydı yapılan\n`, `${user.user.tag}`)
    .addField(`Kaydı yapan\n`, `${message.author.tag}`)
    .addField(`Yeni isim\n`, `${nick} ${yas}`)
    .setFooter("`Marwale | Kayıt Sistemi")
    .setColor("RANDOM")
    message.channel.send(` **${message.author} Kayıt İşlemi Başarıyla Yapıldı!** ||MarwaleBot Kayıt Sistemi||`)
    db.add(`erkekistatistik${message.author.id}.${message.guild.id}`, 1)
    message.guild.channels.cache.get(db.fetch(`yetkilikayıtlogk_${message.guild.id}`)).send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "",
  usage: "erkek @etiket"
};
   