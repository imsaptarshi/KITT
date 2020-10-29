import {DefaultSettings} from "./models/settings/settings.model";
import Discord from "discord.js";
import dotenv from "dotenv";
if (!process.env.BOT_TOKEN) {
    dotenv.config({ path: __dirname + "/.env" });
  }

export const client:Discord.Client =new Discord.Client();

client.on("message",(message)=>{
    client.user?.setActivity(
        DefaultSettings.activity.activity_name,
        ({
            type:DefaultSettings.activity.activity_type
        }))

    if(!message.content.startsWith(DefaultSettings.prefix)) return

    try{
        const Command = require(`./commands/${message.content.slice(DefaultSettings.prefix.length)}.command`);
        Command.default.run(message,client);
    }
    catch(e){
        console.log(e);
    }
})
client.login(process.env.BOT_TOKEN);