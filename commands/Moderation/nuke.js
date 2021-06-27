const Discord = require('discord.js');

module.exports = {
    name: 'nuke',
    description: "Nukes a channel",
    usage: "f!nuke",
    run: async (client, message, args) => {
        if (!message.member.permissions.has('ADMINISTRATOR'))
            return message.reply('<a:wrong:777910274011299850>You do not have the permission to do this!');
        let clearchannel = message.channel || message.channel.mentions.first()
        const filter = m => m.author.id === message.author.id
        message.reply("Are sure you want to nuke this channel? Type: `yes` or `no`. You have 10 seconds...")
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000
        }).then(collected => {

            if (collected.first().content === "no") {
                return message.reply("I have cancelled the nuke!")
            }
            if (collected.first().content === "yes") {
                
                const embed = new Discord.MessageEmbed()
                    .setColor('BLACK')
                    .setTitle('Nuked!')
                    .setDescription(`☑️ This channel just Hiroshima'ed by Hashirama!`)
                    .setImage('https://media.discordapp.net/attachments/695409733280071780/858546647200956466/main-qimg-859aac796c3242cdd75b51570c22e1dd.gif')
                    .setTimestamp()
                    .setFooter(`Requested by ${message.member.user.tag}`)
                clearchannel.clone().then(clearchannel => clearchannel.send(embed))
                clearchannel.delete()
            }
        }).catch(err => {
            message.reply("Your Time is over...")
        })
    }
}