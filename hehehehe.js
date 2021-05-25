const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Hello') {
    msg.reply('Hi 👋');
  }
});

//client.on('message', msg => {
//  if (msg.content === 'help') {
//    msg.reply('Please contact the <@&819919733972271114> staff or higher Staff');
//  }
//});


const { Client, MessageEmbed } = require('discord.js');
 
client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'Help') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('If you need help Please Contact Staff')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('<@&819919733972271114> <--- Contact a person who has this role');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
    if (message.content === 'avatar') {
      const embed = new MessageEmbed()
      .setColor("#985ce7")
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setDescription(`[Avatar URL Link](${message.author.displayAvatarURL()})`)
      .setImage(message.author.displayAvatarURL({dynamic : true}))

      message.channel.send(embed);
    }
});





    client.login(process.env.BOT_TOKEN);
