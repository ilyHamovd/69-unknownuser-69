const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "$";


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`$help`, { type: "PLAYING" });
});

client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('Hi 👋');
  }
});


client.on("message", msg => {
  if(msg.content.startsWith (prefix + "help")) {
      const embed = new Discord.RichEmbed();
  embed.setTitle("If you need help Please Contact Staff")
          .setDescription("<@&819919733972271114> <--- Contact a person who has this role")
          .setColor("ff1f1f");
      msg.channel.send({embed: embed})
  }
});


client.on('message', message => {
  if(message.content.startsWith(prefix + 'avatar')) {
      var mentionned = message.mentions.users.first();
        var getvalueof;
        var bot;
        if(mentionned) {
          getvalueof = mentionned;
        } else {
          getvalueof = message.author;
        }
        let avatar = new Discord.RichEmbed()
        .setTitle(`${getvalueof.username}\'s Avatar`)
        .setImage(`${getvalueof.avatarURL}`);
        message.channel.sendEmbed(avatar);
    }
}); 
   
          
          
          
          client.login(process.env.BOT_TOKEN);
