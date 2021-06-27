module.exports = {
    name: "slowmode",
        aliases: ["sm", "slomo"],
        category: "Utilities",
        cooldown: "0 Seconds",
        description: "Set the slowmode for the channel!",
        usage: "=slowmode <time>",
        run: async (bot, message, args) => {
            

    if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("You don't have permission to set the slowmode, you are missing the `MANAGE_CHANNELS` permission.");

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I don't have permission set the slowmode, I am missing the `MANAGE_CHANNELS` permission.");

           
            
            if (isNaN(args[0])) return message.channel.send(`Specify a number (in seconds)!`);

        message.channel.setRateLimitPerUser(args[0]);
        message.channel.send(
        `**${message.author}** has set the slowmode of this channel to ***${args[0]}*** seconds.`);
        
    }
};