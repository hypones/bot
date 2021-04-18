const Discord = require(`discord.js`);
const db = require(`quick.db`)

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(` **Bu Komutu Kullanabilmek __**Yönetici**__  Yetkisine Sahip Olmalısınız!** `);
let kişi = message.mentions.users.first()
if(!args[0]) {
    const erkekbilgi = await db.fetch(`erkekistatistik${message.author.id}.${message.guild.id}`)
    const kızbilgi = await db.fetch(`kızistatistik${message.author.id}.${message.guild.id}`)
    const üyebilgi = await db.fetch(`üyeistatistik${message.author.id}.${message.guild.id}`)
    const code1 = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**${message.author} İsimli Yetkilinin Toplam Kayıtı**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **Toplam \`${erkekbilgi ? erkekbilgi : '0'}\` Erkek Kayıtı Bulunuyor.**
    **Toplam \`${kızbilgi ? kızbilgi : '0'}\` Kız Kayıtı Bulunuyor.**
    **Toplam \`${üyebilgi ? üyebilgi : '0'}\` Üye Kayıtı Bulunuyor.**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`)
    message.channel.send(code1)}
if(kişi) {
    const erkekbilgi = await db.fetch(`erkekistatistik${kişi.id}.${message.guild.id}`)
    const kızbilgi = await db.fetch(`kızistatistik${kişi.id}.${message.guild.id}`)
    const üyebilgi = await db.fetch(`üyeistatistik${message.author.id}.${message.guild.id}`)
    const code = new Discord.MessageEmbed()
    .setAuthor(kişi.username, kişi.avatarURL())
    .setThumbnail(message.mentions.users.first().avatarURL())
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**Yetkilinin Bilgileri**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **Toplam \`${erkekbilgi ? erkekbilgi : '0'}\` Erkek Kayıtı Bulunuyor.**
    **Toplam \`${kızbilgi ? kızbilgi : '0'}\` Kız Kayıtı Bulunuyor.**
    **Toplam \`${üyebilgi ? üyebilgi : '0'}\` Üye Kayıtı Bulunuyor.**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`)
    message.channel.send(code)}  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['stats'],
 permLevel: 0,
};
exports.help = {
 name: 'kayıtbilgi'
};