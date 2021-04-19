const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("GOLD")
      .setTitle("Rol Koruma sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: m!rolkoruma aç && kapat**"
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma sistemi!")
        .setDescription("**Dostum Zaten Rol Koruma Sistemi Aktif !!**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Malware`Bot Rol Koruma Sistemi")
        .setDescription("**Rol Koruma Sistemi Aktif Halde ... Silinen Rolleri Tekrar Açacağım Ve Size Bildiriceğim !**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Malware`Bot Rol Koruma Sistemi")
      .setDescription("**Rol Koruma Sistemi Kapatıldı !**");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-k"],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = {
  name: "rolkoruma",
  description: "Rol koruma",
  usage: "rol-koruma"
};