const Discord = require("discord.js");
const usedCommand = new Set();

module.exports = {
    name: "simprate",
      aliases: ["howsimp"],
      category: "Fun",
      cooldown: "10 seconds",
      description: "How much of a simp are you?",
      usage: "=howsimp",
    run: async (client, message, args) => {
        let replies = [
            "1%",
            "2%",
            "3%",
            "4%",
            "5%",
            "6%",
            "7%",
            "8%",
            "9%",
            "10%",
            "11%",
            "12%",
            "13%",
            "14%",
            "15%",
            "16%",
            "17%",
            "18%",
            "19%",
            "20%",
            "21%",
            "22%",
            "23%",
            "24%",
            "25%",
            "26%",
            "27%",
            "28%",
            "29%",
            "30%",
            "31%",
            "32%",
            "33%",
            "34%",
            "35%",
            "36%",
            "37%",
            "38%",
            "39%",
            "40%",
            "41%",
            "42%",
            "43%",
            "44%",
            "45%",
            "46%",
            "47%",
            "48%",
            "49%",
            "50%",
            "51%",
            "52%",
            "53%",
            "54%",
            "55%",
            "56%",
            "57%",
            "58%",
            "59%",
            "60%",
            "61%",
            "62%",
            "63%",
            "64%",
            "65%",
            "66%",
            "67%",
            "68%",
            "69%",
            "70%",
            "71%",
            "72%",
            "73%",
            "74%",
            "75%",
            "76%",
            "77%",
            "78%",
            "79%",
            "80%",
            "81%",
            "82%",
            "83%",
            "84%",
            "85%",
            "86%",
            "87%",
            "88%",
            "89%",
            "90%",
            "91%",
            "92%",
            "93%",
            "94%",
            "95%",
            "96%",
            "97%",
            "98%",
            "99%",
            "100%",
            "10000000000000000000000000000%",
             ];

             let result = replies[Math.floor(Math.random()*(replies.length))]

            let helpembed = new Discord.MessageEmbed()
            .setTitle("Simprate Machine")
            .setColor(`BLACK`)
            .addField("Answer", `\`\`\`${result}\`\`\``);
         
             if(usedCommand.has(message.author.id)){
                const cooldownEmbed = new Discord.MessageEmbed()
    .setTitle("Woahh Calm Down")
    .setDescription(`Slow down dude, this command has a cooldown of **10** seconds.`)
    .setColor("BLACK")

    message.channel.send(cooldownEmbed)
             } else {
                 
                 message.channel.send(helpembed)
                 
                 usedCommand.add(message.author.id);
                 setTimeout(() => {
                     usedCommand.delete(message.author.id);
                 }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
             }
         }
      }