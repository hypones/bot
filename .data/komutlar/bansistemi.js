const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const botadi = "Malware`Bot";

let prefix = ayarlar.prefix;

exports.run = function(client, message) {
  const egse = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Ban Sistemi")
    .addField(`${prefix}ban `, "belirtilen Kişiyi Banlar.")
    .addField(`${prefix}unban `, "belirtilen Kişinin Banını Açar.")
    .addField(`${prefix}banlist `, "Banlananları Gösterir.")
    .addField(`${prefix}banyetkilirol `, "Ban Yetkilisi Ayarlarsınız.")
    .addField(`${prefix}banlog `, "Ban Logunu Ayarlarsınız.")
    .setFooter(`${botadi} Ban Sistemi`, client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(client.user.avatarURL());
  message.channel.send(egse);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bansistemi"
};
