const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "shibe",
      aliases: [],
      category: "Animals",
      description: "shibe",
      usage: "=shibe",
    run: async (client, message, args) => {
   const { body } = await superagent
  .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`)

  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle("Here's Your Shibe")
    .setImage(body[0]) 
    .setFooter(``);
    message.channel.send({embed});
    }
}