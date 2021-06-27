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

client.on("guildMemberAdd", member => {
  const Discord = require('discord.js');

  let welcomeChannel = member.guild.channels.cache.find(channel => channel.id === '858186177478918185');

  let welcomeEmbed = new Discord.MessageEmbed()
    .setTitle(`Shinobi Joined (@${member.user.tag})`)
    .addField('**Shinobi Name**', `\`\`\`${member.user.tag}\`\`\``, true)
    .addField('**Shinobi Count**', `\`\`\`${member.guild.memberCount}\`\`\``, true)
    .addField('**Guild Name**', `\`\`\`${member.guild.name}\`\`\``, true)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: 'png' }))
    .addField('**Date** (MM/DD/YY)', `\`\`\`${new Intl.DateTimeFormat("en-US").format(Date.now())}\`\`\``, true)
    .setColor(`BLACK`)
    .setFooter(`Account Creation Date --> ${member.user.createdAt}`)
    .setImage(`https://i.pinimg.com/originals/21/22/02/21220264ec342d0a6ca98c6cce52f1c6.gif`);
    
      welcomeChannel.send(welcomeEmbed)
});

client.on("guildMemberRemove", member => {
  const goodbyeChannel = member.guild.channels.cache.find(channel => channel.id === '858473900718424085')
  const Discord = require('discord.js');

  let goodbyeEmbed = new Discord.MessageEmbed()
  .setTitle(`Member Left`)
  .addField('**Shinobi Name**', `\`\`\`${member.user.tag}\`\`\``, true)
  .addField('**New Shinobi Count**', `\`\`\`${member.guild.memberCount}\`\`\``, true)
  .addField('**Guild Owner**', `\`\`\`${member.guild.owner.user.tag}\`\`\``, true)
  .setDescription(`**Rip ${member.user.tag}, they must've gotten clapped by Madara. Yep, they were totally clapped by Madara.**`)
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: 'png' }))
  .addField('**Date** (MM/DD/YY)', `\`\`\`${new Intl.DateTimeFormat("en-US").format(Date.now())}\`\`\``, true)
  .setColor(`BLACK`)
  .setImage("https://media.discordapp.net/attachments/695409733280071780/858548349225664512/madara.gif")
  
    goodbyeChannel.send(goodbyeEmbed)
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
  });

client.login(token);