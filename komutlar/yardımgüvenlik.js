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
:white_small_square:\`${prefix}antiraid\` **:: İzinsiz Botları Banlar.**
:white_small_square:\`${prefix}botizni\` **:: Anti Raid İçin Bot İzni Verir.**
:white_small_square:\`${prefix}kanalkoruma\` **:: Kanalları Korur.**
:white_small_square:\`${prefix}rolkoruma\` **:: Rolleri Korur.**


`)

.setFooter("Botu davet etmek için .davet")
.setTimestamp()
message.channel.send(egas)
}
module.exports.conf = {
aliases: ['gü']
}

module.exports.help = {
name: "guard"
}