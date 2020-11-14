const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "role",
  description: "A role utility command",
  category: "utility",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permission to create roles.");
            
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I don't have permission to do this, I need the `MANAGE_ROLES` permission.");

      let rName = message.content.split(" ").slice(2).join(" ");
      let rColor;
      args.forEach((arg) => {
        if (arg.startsWith("#")) {
          rColor = arg;
        }
      });
      if (!rName) {
        return message.channel.send(
          `You did not specify a name for your role!`
        );
      }
      if (!rColor) {
        return message.channel.send(
          `You did not specify a color for your role!`
        );
      }
      if (rColor >= 16777215)
        return message.channel.send(
          `That hex color range was too big! Keep it between 0 and 16777215`
        );
      if (rColor <= 0)
        return message.channel.send(
          `That hex color range was too small! Keep it between 0 and 16777215`
        );
      rName = rName.replace(`${rColor}`, ``);
      let rNew = await message.guild.roles.create({
        data: {
          name: rName,
          color: rColor,
        },
      });
      const Embed = new MessageEmbed()
        .setTitle(`New role!`)
        .setDescription(
          `${message.author.username} has created the role "${rName}"\nIts Hex Color Code: ${rColor}\nIts ID: ${rNew.id}`
        )
        .setColor(rColor);
      message.channel.send(Embed);
    
  },
};