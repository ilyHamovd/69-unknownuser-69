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

client.on('message', message => {
  if (message.content === prefix + 'ping') {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
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

client.on('message', function (msg) {
  if (msg.content.startsWith(prefix + 'server')) {
    let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Server Statistics.✨`)
      .addField(':globe_with_meridians:~**Server Region**', `[** __${msg.guild.region}__ **]`, true)
      .addField(':medal:~**Roles**', `[** __${msg.guild.roles.size}__ **]`, true)
      .addField(':red_circle:~**Members**', `[** __${msg.guild.memberCount}__ **]`, true)
      .addField(':blue_circle:~**Online Members**', `[** __${msg.guild.members.filter(m => m.presence.status == 'online').size}__ **]`, true)
      .addField(':pencil:~**Text Rooms**', `[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`, true)
      .addField(':microphone:~**Voice Rooms**', `[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`, true)
      .addField(':crown:~**Server Owner**', `**${msg.guild.owner}**`, true)
      .addField(':id:~**Server ID**', `**${msg.guild.id}**`, true)
      .addField(':date:~**Server Created on**', msg.guild.createdAt.toLocaleString())
    msg.channel.send({ embed: embed });
  }
});


          client.login(process.env.BOT_TOKEN);
