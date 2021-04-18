const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();

module.exports.run= async(client, message, args) => {
    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "m!";
let egas = new Discord.MessageEmbed()
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`
:white_small_square:\ Kendisine Komut Hazırlamıyo Sizi Düşünüyo :D**


`)

.setFooter("Botu davet etmek için m!davet")
.setTimestamp()
message.channel.send(egas)
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "özel"
}