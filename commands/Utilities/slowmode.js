module.exports = {
    name: "slowmode",
        aliases: ["sm", "slomo"],
        category: "Utilities",
        cooldown: "",
        description: "Set the slowmode for the channel!",
        usage: "=slowmode <time> <reason>",
        run: async (bot, message, args) => {
            if (!args[0])
            return message.channel.send(
            `You did not specify the time in seconds you wish to set this channel's slow mode too!`
            );
            if (isNaN(args[0])) return message.channel.send(`That is not a number!`);

        message.channel.setRateLimitPerUser(args[0]);
        message.channel.send(
        `**${message.author.name}** has set the slowmode of this channel to ***${args[0]}*** seconds.`
        );
    },
};
  