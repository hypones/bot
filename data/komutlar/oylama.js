const Discord = require('discord.js');
exports.run = async (client, message, args) => {

let anket = args.slice(0).join(" ")
if(!anket) return message.channel.send("Lütfen Ne Anketi Yapıcağını Yazarmısın?")
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
let Kexpert = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("__Malware`Bot Oylama Sistemi__")
.setDescription(`
**${anket}**


`)
message.channel.send(Kexpert).then(async m => {
await m.react("🔴")
await m.react("🟢")
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'oylama',
  description: "Discord Code Share Anket Komutu",
  usage: '-anket <ahnketyapılcakmesaj>'
}