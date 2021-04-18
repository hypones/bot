const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("Anti-raid zaten açılmış.");
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("Antiraid sistemi başarıyla açıldı");
  }

  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        "Antiraid açılmamış. Açmak için **m!ntiraid aç**"
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "antiraid-aç");
    message.reply("Anti-raid sistemi başarıyla kapatıldı");
  }
  if (!args[0])
    return message.reply(
      "Lütfen geçerli işlem girin. Örnek: **m!antiraid aç/kapat**"
    );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["antiraid"],
  permLevel: 0
};
exports.help = {
  name: "antiraid"
};
