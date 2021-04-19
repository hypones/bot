const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');


exports.run = async (client, message, args) => {

  
  
 
  
  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.reply('Mod log kanalı ayarlanmamış');
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.reply('Lütfen kicklemek istediğiniz kullanıcıyı etiketleyin');
  if (reason.length < 1) return message.reply('Kickleme sebebinizi giriniz');
  if (user.id === message.author.id) return message.reply('Kendini kickleyeceğine kendin çıksana?');
  /*if (user.roles.highest.position > message.member.roles.highest.position - 1) {
			return message.reply(`Bu kişinin senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
		}*/
  //if (!message.guild.member(user).kickable) return message.channel.send(`Bu kişiyi sunucudan atamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);
  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .addField('İşlem', 'kick')
  .addField('Kicklenen üye/tag', `<@${user.id}>`)
  .addField('Kickleyen yetkili', `@${message.author.username}`)
  .addField('Kick sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Üye başarıyla kicklendi`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 2,
 
};

exports.help = {
  name: 'at'
};