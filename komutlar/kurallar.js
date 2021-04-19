const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const exampleEmbed = new Discord.MessageEmbed()
 .setColor("BLACK")
 .setTitle(`${client.user.username}`)
 .setDescription(`**• Kurallar •**

**Reklam**
• Sözlü reklamlar, link ile reklam, özelden reklam, resim ile reklam ve benzeri şekilde reklamlar yapmak yasaktır.

**Küfür, Argo, Hakaret**
• Her kanalda küfür etmek ve argo kullanmak yasaktır.
• Üyelere karşı hakaret etmek ve dalga geçme yasaktır.

**Yetkililer ve Yetki**
• Yetki istemek yasaktır.
• Yetkili alımları ile ilgili soru sormak yasaktır.
• Yetkilileri boş yere @etiketlemek ve @etiketleyerek spam yapmak yasaktır.
• Yetkililere saygılı olun.

**Spam, Flood, Etiketleme**
• Spam yapmak yasaktır.
• Bir kelimeyi sürekli bir mesajda yazmak yasaktır.
• Flood yapmak alt alta yazmak yasaktır.
• Bir üyeyi sürekli @etiketlemek yasaktır.

**Din, Siyaset, Cinsellik**
• Din ile ilgili konuşmak, tartışmak, kullanıcı adlarını din ile ilgili koymak yasaktır.
• Siyaset ile ilgili konuşmak, tartışmak, kullanıcı adlarını siyaset ile ilgili koymak yasaktır.
• 18+ fotoğraflar paylaşmak ve konuşmak yasaktır.

**Kavga, Tartışmak**
• Kavga etmek, kavgaya dahil olmak ve tartışmak yasaktır.
•Herhangi bir sorununuz varsa yetkiliye danışınız`)
.setFooter("By. Malware`Bot")
.setImage("https://media1.tenor.com/images/e223e59708750f7835e1284f91d13ba9/tenor.gif?itemid=15657985")
  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kurallar',
  description: 'kuralları atar',
  usage: '!kurallar'
}; 