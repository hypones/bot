const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Balık Tuttun Balığı Çekiyorsun..").then(message => {

var FwhyCode = [

      "Sazan Tuttun! :fish:",
      "Köpek Balığı Tuttun Aman Dikkat Et Seni Yemesin :D",
      "Uskumru Tuttun! :fish:",
      "Mezgit Tuttun! Havyarıda İyi Para Eder :) :fish:",
      "Japon Balığı Tuttun Yeme haaaa",
      "Hamsi Tuttun! Ne Datlıdır Bu Şimdi :fish:",
      "Levrek Tuttun! :fish:",
      "Hiçbirşey Tutamadın Maalesef! Ağla 😭",
      "Alabalık Tuttun! :fish:",
      "Maalesef Balık Oltadan Kaçtı! :wastebasket:",
      "İstavrit Tuttun! :fish:"

    ];

    var FwhyCode = FwhyCode[Math.floor(Math.random() * FwhyCode.length)];
    message.edit(`${FwhyCode}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["balıktut"],
  permLevel: 0
};

exports.help = {
  name: "balık-tut",
  description: "Balık Tutarsın.",
  usage: "balıktut"
};
