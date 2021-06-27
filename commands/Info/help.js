const Discord = require("discord.js");
const usedCommand = new Set();

module.exports = {
    name: "help",
      aliases: [],
      category: "Info",
      cooldown: "5 seconds",
      description: "Need some help? This is the perfect command for you!",
      usage: "=help || =help <command>",
    run: async (client, message, args) => {    

    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if(!helpArgs[0]) {
        var embed0 = new Discord.MessageEmbed()
            .setAuthor(`Here are the Avaible Commands to use:`)
            .setDescription('```COMMAND BEING UPDATED```')
            .addFields({ name: 'Prefix', value: '```=```', inline: true})
            .setColor('PURPLE')
            
            if(usedCommand.has(message.author.id)){
                message.channel.send('You cannot use the command beacuse of the cooldown.')
            } else {
                
                message.channel.send(embed0)
                
                usedCommand.add(message.author.id);
                setTimeout(() => {
                    usedCommand.delete(message.author.id);
                }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
            }
    };

    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(client.commands.has(command)) {
            
            command = client.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.name} Command`)
            .setDescription(`
            
            - **Command's Aliases:** ${command.aliases || "No Aliases"}
            - **Command's Category:** ${command.category || "No Category"}
            - **Command's Cooldown:** ${command.cooldown || "No Cooldown"}    
            - **Command's Description:** ${command.description || "No Description"}
            - **Command's Permissions:** ${command.permissions || "No Permissions"}
            - **Command's Usage:** ${command.usage || "No Usage"}
            
            
            `)
            .setColor('PURPLE')

            if(usedCommand.has(message.author.id)){
                message.channel.send('You cannot use the command beacuse of the cooldown.')
            } else {
                
                message.channel.send(embed)
                
                usedCommand.add(message.author.id);
                setTimeout(() => {
                    usedCommand.delete(message.author.id);
                }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
            }
    }
}
}
}