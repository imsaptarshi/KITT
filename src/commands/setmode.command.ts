import Discord, { MessageEmbed } from "discord.js";
import { DefaultSettings, setMode } from "../models/settings/settings.model";
import { Modes } from "../types/settings.types";
import {Command} from "../types/commands.types";

const SetMode:Command={
    name:"setmode",
    type:"",
    help:{
        name:"SetMode",
        usage:`${DefaultSettings.prefix}setmode <ACTIVE | MAINTAINANCE>`,
        description:"Toggles the bot to Active or Maintainance"
    },
    run:async (message:Discord.Message,client:Discord.Client)=>{
        if (message.author.id === "386801716462485504" && message.content.split(" ")[1] !== undefined) {
            const mode=message.content.slice(message.content.indexOf(" ")+1);
            let embed=new MessageEmbed()
                .setColor([35,145,209])
                .setAuthor("KITT","https://images.discordapp.net/avatars/521765880380653598/5980ab0945f7f4ad1fe59a7eb6d1b9c3.png?size=512")
                .setTitle("SetMode")
                .setFooter("© KITT | Saptarshi Basu")
                .setTimestamp()
            if(mode==="ACTIVE"){
                setMode(Modes.ACTIVE);
                embed.setDescription(`Bot is now ACTIVE`);
            }
            else if(mode==="MAINTAINANCE"){
                setMode(Modes.MAINTAINANCE);
                embed.setDescription(`Bot is now under MAINTAINANCE`);
            }
            message.reply(embed);
        }
        else if (message.content.split(" ")[1] === undefined) {
            message.reply(`mode cannot be left blank, refer to \`${DefaultSettings.prefix}help setmode\``);
        }
        else{
            message.reply("Seems like you don't have the right permissions to use this command.\n*for now its only enabled for bot owner*");
        }
    }
}

export default SetMode as Command;