const Discord = require('discord.js');
const client = new Discord.Client();

const yt_api_key = "AIzaSyBl3MQUBNbcJXtjKcaUtWEisYi9K4pQqUU"; 
const ms = require("ms");
const { get } = require("snekfetch");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyBl3MQUBNbcJXtjKcaUtWEisYi9K4pQqUU");
const fs = require("fs");
const fetchVideoInfo = require("youtube-info");

var prefix = "$";


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
