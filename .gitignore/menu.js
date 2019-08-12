const Discord = require('discord.js');
const client = new Discord.Client();
const superagent = require('superagent');

client.login(process.env.TOKEN);

var prefix = ("b!");

client.on("message", (message) => {

    if(message.content === "bonjour") {
        message.channel.send("Salutation!")
    }

    if(message.content === prefix + "help"){
        message.channel.send("Veux-tu de l'aide?")
    }
    
     if(cmd === `${prefix}cat`) {
        let msg = await message.channel.send("Generating...")

        let {body} = await superagent
        .get('http://aws.random.cat/meow')
        console.log(body.file)
    }



});
