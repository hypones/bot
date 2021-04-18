const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {
let db = require('croxydb')
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let botisim = message.guild.members.cache.get(client.user.id).displayName
let data = await db.fetch(`jailrol_${message.guild.id}`)
if(!data)  return message.channel.send(`❌|Jail rolünü bulamadım.`)
let data2 = await db.fetch(`jailyetkilisi_${message.guild.id}`)
if(!message.member.roles.cache.has(data2))  return message.channel.send('Jail yetkili rolü ayarlanmamış veya <@&' + data2 + '> Rolüne sahip değilsin.')
let data3 = await db.fetch(`jailkanal_${message.guild.id}`)
if(!data3)  return message.channel.send(`❌|Jail kanalını bulamadım.`)
let rol = message.guild.roles.cache.get(data)
if(!rol) return message.channel.send(`❌|Jail rolü ayarlı değil.`)
let yetkilirol = message.guild.roles.cache.get(data2)
if(!yetkilirol) return message.channel.send(`❌|yetkilisi ayarlı değil.`)
let kanal = message.guild.channels.cache.get(data3)
if(!kanal) return message.channel.send(`❌|Jail log kanalı ayarlı değil.`)
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(`❌|Birini etiketle`)
  if(kişi.hasPermission("MANAGE_GUILD")) return message.channel.send(`❌| Seçtiğiniz kişide **MESAJLARI YÖNET** yetkisi var`)
  
  let zaman = args[1]
  if(!args[1]) return message.channel.send(`❌| Ne kadar süre jailde duracağını belirtmelisin.\nÖrnek: **.jail @kişi 8m çok konuştu**\n\n Saat birimleri: \n**1d = 1 gün \n 1s = 1 saniye \n 1m = 1 dakika \n 1h = 1 saat**`)

let sebep = args.join(' ').slice(args[1].length+args[0].length + 1)
if(!sebep) sebep = 'Sebep belirtilmemiş.'
  
  const wasted = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
  .setColor(`#d10909`)
  .setDescription(`**Birini Jaile Attım**`)
  .addField(`**Jaile Atılan Kişi:**`, kişi, true)
  .addField(`**Yetkili:**`, `<@${message.author.id}>`, true)
  .addField(`**Sebep:**`, sebep, true)
  .addField(`**Süre:**`, zaman.replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat'), true)
  .setTimestamp()
  .setFooter(`${message.channel.name} kanalında kullanıldı.`)
  .setThumbnail(message.author.avatarURL())
  
  const bitti = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setDescription(`Birini Jailden Çıkardım`)
  .addField(`**Serbest Bırakılan:**`, kişi, true)
  .addField(`**yetkili:**`, `<@${message.author.id}>`, true)
  .setTimestamp()
  .setColor(`#2cd109`)
  .setFooter(`Jail süresi bitti. | ${message.channel.name} kanalında kullanıldı.`)
  .setThumbnail(message.author.avatarURL())



  kişi.roles.add(rol.id);
    kişi.roles.cache.forEach(r => {
        kişi.roles.remove(alınacakrol)
        db.set(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    db.set(`${message.guild.id}.jail.${kişi.id}`, 'codare')
    kanal.send(wasted)
    message.channel.send(`✅|${kişi} isimli kişi başarıyla jaile atıldı`)
    setTimeout(async () =>{
    kişi.roles.remove(rol.id)
    kanal.send(bitti)
  }, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.cache.forEach(async r => {
     
kişi.roles.add(alınacakrol)


db.delete(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`)
})
          db.delete(`${message.guild.id}.jail.${kişi.id}`)
              }, ms(zaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['uçur'],
    permLevel: 0
  };
  
exports.help = {
 name: 'jail',
};