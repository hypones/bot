const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

    let üyerol = message.mentions.roles.first()
    if(!üyerol) return message.channel.send('❌|Bir Rol etiketlemelisin.')
   db.set(`üyeroll_${message.guild.id}`, üyerol.id)
   return message.channel.send('✅|**Kayıt Üye Rolü <@&' + üyerol + '> Olarak Ayarlandı!**')
} 

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "normalrol"
}
