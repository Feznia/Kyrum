const Discord = new require("discord.js");
const usedCommand = new Set();

module.exports = {
    name: "snipe",
        aliases: ["sm", "slomo"],
        category: "Utilities",
        cooldown: "5 seconds",
        description: "Snipe a deleted message!",
        usage: "=snipe",
        run: async (client, message, args) => {
            const snipes = client.snipes.get(message.channel.id) || []
    const msg = snipes[args[0] - 1 || 0];
    if (!msg) return message.channel.send(`❌No messages have been deleted yet.❌`);
    const Embed = new Discord.MessageEmbed()
      .setAuthor(
        msg.author.tag,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setDescription(msg.content)
      .setColor('Purple')
      .setTimestamp()
      .setFooter(`| Get sniped you noob |`);
    if (msg.attachment) Embed.setImage(msg.attachment);

    if(usedCommand.has(message.author.id)){
      message.channel.send('You cannot use the command beacuse of the cooldown.')
  } else {
      
      message.channel.send(Embed)
      
      usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
  }
}