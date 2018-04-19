const setting = require ("./ducksetting.json");
const Discord = require('discord.js');
const prefix = setting.prefix;
const bot = new Discord.Client();

bot.on("ready", async  () => {
    console.log(`Bot is ready! ${bot.user.username}`);
//bot link insert
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
            console.log(link);
    }   catch(e){
        console.log(e.stack);
    }
});

//userinfo
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm" ) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}userinfo`) {
        let embed =  new Discord.RichEmbed()
                .setAuthor(message.author.username)
                .setDescription("This is the user's info!")
                .setColor("#9B59B6")
                .addField("Full username", `${message.author.username}#${message.author.discriminator}`)
                .addField("ID",message.author.id)
                .addField("create At", message.author.createdAt);

        message.channel.sendEmbed(embed);

        return;
    }
});

//token
bot.login(setting.token);

/*
bot.on("ready",() => {
});
*/

/*
bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
    console.log(link);
}).catch(err => {
    console.log(err.stack);
});

console.log("hello2");
console.log(setting.token);
console.log(setting.prefix);
*/
