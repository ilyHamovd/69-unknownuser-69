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
      .addField(':pencil:~**Text Rooms**', `[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`, true)
      .addField(':microphone:~**Voice Rooms**', `[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`, true)
      .addField(':crown:~**Server Owner**', `**${msg.guild.owner}**`, true)
      .addField(':id:~**Server ID**', `**${msg.guild.id}**`, true)
      .addField(':date:~**Server Created on**', msg.guild.createdAt.toLocaleString())
    msg.channel.send({ embed: embed });
  }
});





client.on('message', function (msg) {
  if (msg.content.startsWith(prefix + 'Songs')) {
    let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addFieLD('Sega')
      .addFieLD('Loading')
      .addFieLD('Body uk')
      .addFieLD('Streets')
      .addFieLD('Moonlight')
      .addFieLD('Space cadet')
      .addFieLD('Loveeeee song')
      .addFieLD('gang shi no lame shi')
      .addFieLD('Sricha')
      .addFieLD('let me know')
      .addFieLD('love and affection')
      .addFieLD('fallen down slowed')
      .addFieLD('Evreything black')
      .addFieLD('Maribou state- Tongue ft. Holly walker (s l o w e d + r e v e r b)')
      .addFieLD('sunflower // rex orange county - guitar fingerstyle cover')
      .addFieLD('heartbreak anniversary')
      .addFieLD('playboi carti - skeletons ( slowed + reverb )')
      .addFieLD('martin and gina lyrics')
      .addFieLD('magnolia playboi lyrics')
      .addFieLD('TRAVIS SCOTT - 5% TINT (SLOWED + REVERB)')
      .addFieLD('Be Forreal - Tevin Terrell (tiktok Song) this is how I feel, Im in...')
      .addFieLD('dreaming pop')
      .addFieLD('dead man walking')
      .addFieLD('Letter to Jarad')
      .addFieLD('night trouble petit biscuit')
      .addFieLD('90mh (you don’t really want  smoke) (clean) by TREFUEGO')
      .addFieLD('tell em unreleased')
      .addFieLD('Syko - #BrooklynBloodPop')
      .addFieLD('another love - tom odell (slowed n reverb)')
      .addFieLD('with my hoe lyrics')
      .addFieLD('Jealous eyedress slowed')
      .addFieLD('20 min lyrics')
      .addFieLD('Zodiac killer')
      .addFieLD('Yung bratz')
      .addFieLD('French monata swae lee unforgettable slowed')
      .addFieLD('I just want to be the one you love')
      .addFieLD('Exil hiboky')
      .addFieLD('Worldstar money')
      .addFieLD('North memphis')
      .addFieLD('Jasiah crisis lofi remix')
      .addFieLD('miss the rage slowed trippie red beat')
      .addFieLD('I cant handle change')
      .addField('Cochise - Tell Em* (feat. $NOT) (Remaster + Extended)')
      .addField('sofaygo slowed')
      .addField('Chilled Duy Lil blues - Oxysosa')
      .addField('lykke li - little bit (remix + slowed)')
      .addField('bruises')
      .addField('Dido - Thank you (Slowed + Reverb)')
      .addField('vas finn')
      .addField('')
      .addField('')

      msg.channel.send({ embed: embed });
    }
});



          client.login(process.env.BOT_TOKEN);
