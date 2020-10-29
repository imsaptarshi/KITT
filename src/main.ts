import {DefaultSettings} from "./models/settings/settings.model";
import Discord from "discord.js";
import dotenv from "dotenv";
if (!process.env.BOT_TOKEN) {
    dotenv.config({ path: __dirname + "/.env" });
  }

export const client:Discord.Client =new Discord.Client();

client.on("message",(message:Discord.Message)=>{
    client.user?.setActivity(
        DefaultSettings.activity.activity_name,
        ({
            type:DefaultSettings.activity.activity_type
        }))

    if(!message.content.startsWith(DefaultSettings.prefix)) return
    
    const cmd:string=((message.content.slice(DefaultSettings.prefix.length)).split(" "))[0];

    try{
        const Command = require(`./commands/${cmd}.command`);
        Command.default.run(message,client);
    }
    catch(e){
        console.log("Command not available");
    }
})
client.login(process.env.BOT_TOKEN);