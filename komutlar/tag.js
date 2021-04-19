const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, member) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0x2488e7)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("❌ Bu Komutu Özel Mesajlarda Kullanamazsın! ");
    return message.author.send(ozelmesajuyari);
  }

  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      "⚠ Bu Komutu Kullana Bilmek için `Sunucuyu Yönet` Yetkisine Sahip Olman Gerek!"
    );

  let mesaj = args.join(" ");
  if (!mesaj)
    return message.channel.send(
      "❌ Oto Tag Ayarlamak için Bir Tag Yazmalısın! `m!ototag <tagınız> `"
    );
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  await db.set(`ototag_${message.guild.id}`, mesaj);
  return message.channel.send(
    `✅ İşlem Başarılı!\nOto Tag  \`${mesaj}\` Olarak Ayarlanmıştır!\n 🔹 Oto Tag Mesaj Kanalı Ayarlamak için \`m!ototagkanal #kanal\``
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
//Dcs Ekibi
exports.help = {
  name: "ototag",
  description: "$adista",
  usage: "ototag"
};

 
