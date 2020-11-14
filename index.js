const {
    Client,
    Collection
} = require('discord.js');
const {
    prefix,
    token,
    ownerId
} = require('./config.json');

const { config } = require("dotenv");

const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();


// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence("I am Devil") 
})

client.on("message", async message => {
   

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
});

client.snipes = new Map()

  client.on('messageDelete', async message => {
    if(message.author.bot) return;
  const snipes = message.client.snipes.get(message.channel.id) || [];
  snipes.unshift({
  content: message.content,
  author: message.author,
  image: message.attachments.first()
        ? message.attachments.first().proxyURL
        : null,
      date: new Date().toLocaleString("en-US", {
        dataStyle: "full",
        timeStyle: "short",
      }),
    })
  snipes.splice(10)
  message.client.snipes.set(message.channel.id, snipes)
  })

client.login(token);