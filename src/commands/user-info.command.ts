import Discord from "discord.js";
import { DefaultSettings } from "../models/settings/settings.model";
import {Command} from "../types/commands.types";

const Ping:Command={
    name:"user-info",
    type:"",
    help:{
        name:"User Info",
        usage:`${DefaultSettings.prefix}user-info`,
        description:"Returns the info of the current user uses it"
    },
    run:async (message:Discord.Message,client?:Discord.Client)=>{
        message.reply("Wait a sec...").then((m:any)=>{
        let embed=new Discord.MessageEmbed()
            .setColor([35,145,209])
            .setAuthor("KITT","https://images.discordapp.net/avatars/521765880380653598/5980ab0945f7f4ad1fe59a7eb6d1b9c3.png?size=512")
            .setTitle(`${message.author.tag}`)
            .setFooter("© KITT | Saptarshi Basu")
            .setTimestamp()
            .setDescription(`**Name**: ${message.author.username}\n**ID**: ${message.author.id}`)
        message.reply(embed);
        });
    }
}

export default Ping as Command;