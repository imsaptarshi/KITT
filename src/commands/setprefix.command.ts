import Discord, { MessageEmbed } from "discord.js";
import { DefaultSettings,setPrefix } from "../models/settings/settings.model";
import {Command} from "../types/commands.types";

const SetPrefix:Command={
    name:"setprefix",
    type:"",
    help:{
        name:"Set Prefix",
        usage:`${DefaultSettings.prefix}setprefix <prefix>`,
        description:"Changes the current prefix"
    },
    run:async (message:Discord.Message,client?:Discord.Client)=>{
        const params:string=message.content.split(" ")[1];
        setPrefix(params);
        let embed=new MessageEmbed()
            .setColor([35,145,209])
            .setAuthor("KITT","https://images.discordapp.net/avatars/521765880380653598/5980ab0945f7f4ad1fe59a7eb6d1b9c3.png?size=512")
            .setTitle("Prefix For KITT Has Been Changed")
            .setFooter("© KITT | Saptarshi Basu")
            .setTimestamp()
            .setDescription(`The new prefix for KITT is ${DefaultSettings.prefix}`);
    message.reply(embed);
    }
}

export default SetPrefix as Command;