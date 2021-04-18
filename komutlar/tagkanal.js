const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, params, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0x2488e7)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("❌ Bu Komutu Özel Mesajlarda Kullanamazsın!");
    return message.author.send(ozelmesajuyari);
  }
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      "⚠ Bu Komutu Kullana Bilmek için `Sunucuyu Yönet` Yetkisine Sahip Olmalısın!"
    );
  let otoTagkanal = message.mentions.channels.first();
  if (!otoTagkanal)
    return message.channel.send(
      "⚠ Oto Tag Mesaj Kanalı Yazman Gerek!  `m!ototagkanal #kanal`"
    );
  db.set(
    `ototagKanal_${message.guild.id}`,
    message.mentions.channels.first().id
  );
  let i = await db.fetch(`ototagKanal_${message.guild.id}`);
  message.channel.send(`**✅  İşlem Başarılı!\nOto Tag Mesaj Kanalı:** <#${i}>`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}; //Dcs Ekibi

exports.help = {
  name: "ototagkanal",
  description: "",
  usage: "ototagkanal"
};