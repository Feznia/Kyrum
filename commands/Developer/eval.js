const ownerID = "695400248696373248"

module.exports = {
    name: "eval",
      aliases: ["evaluation"],
      category: "Developer",
      cooldown: "",
      description: "Only the bot owner may use this",
      usage: "=eval <code>",
      permissions: "BOT_OWNER",
    run: async (client, message, args) => {
          if(!message.author.id === ownerID) return message.channel.send("You are not the bot owner.");
          try {
            const code = args.join(" ");
            let evaled = eval(code);
       
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
       
            message.channel.send((evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
          }
        }
      }
    