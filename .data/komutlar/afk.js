const Discord = require("discord.js");
const db = require("croxydb");
const bot = new Discord.Client();

module.exports.run = async (client, message, args) => {
  var kullanıcı = message.author;
  var sebep = args.slice(0).join("  ");
  if (!sebep)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(`Uyarı | Warning!`)
        .setDescription(`**AFK Moduna Geçmek İçin Bir Sebep Belirtmelisin!**`)
    );
  let dcs15 = new Discord.MessageEmbed()
    .setTitle(`BİLDİRI`)
    .setTimestamp()
    .setFooter(client.user.username)
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**AFK Moduna Girmek İçin Onay Veriyor Musun?**`)
    .setColor("RED");
  message.channel.send(dcs15).then(sunucu => {
    sunucu.react("<a:onaylandi:755839418782449684>").then(() => sunucu.react("<a:hata1:756259840296484915>"));

    let yesFilter = (reaction, user) =>
      reaction.emoji.name === "<a:onaylandi:755839418782449684>" && user.id === message.author.id;
    let noFilter = (reaction, user) =>
      reaction.emoji.name === "<a:hata1:756259840296484915>" && user.id === message.author.id;

    let yes = sunucu.createReactionCollector(yesFilter, { time: 0 });
    let no = sunucu.createReactionCollector(noFilter, { time: 0 });

    yes.on("collect", r => {
      message.member.setNickname(`[AFK] ${message.member.displayName}`);
      db.set(`afktag_${message.author.id}`, message.member.displayName);
      let dcs16 = new Discord.MessageEmbed()
        .setTitle(`<a:onay:755840251066581012> İşlem Başarılı!`)
        .setDescription(`**AFK Moduna Girdiniz!**`)
        .setColor("GREEN")
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .setThumbnail(message.guild.iconURL)
        .setFooter(message.guild.name);
      message.channel.send(dcs16).then(x => {
        x.delete(5000);
      });
    });
    db.set(`afk_${kullanıcı.id}`, sebep);
    db.set(`afk_süre_${kullanıcı.id}`, Date.now());
    no.on("collect", r => {
      db.delete(`afk_${kullanıcı.id}`, sebep);
      db.delete(`afk_süre_${kullanıcı.id}`, Date.now());
      message.channel.send(`İptal Edildi!`);
    });
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "afk"
};