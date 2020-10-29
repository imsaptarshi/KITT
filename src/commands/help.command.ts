import Discord from "discord.js";
import {Command} from "../types/commands.types";

const Help:Command={
    name:"help",
    type:"",
    help:{
        name:"Help",
        code:"!help",
        usage:""
    },
    run:async (message:any,client?:Discord.Client)=>{
        const fs=require("fs");
        const files = await fs.promises.readdir("./src/commands");
        for(let i=0;i<files.length;i++){
            files[i]=files[i].slice(0,files[i].indexOf("."));
        }
        let embed=new Discord.MessageEmbed()
            .setColor([35,145,209])
            .setAuthor("KITT","https://images.discordapp.net/avatars/521765880380653598/5980ab0945f7f4ad1fe59a7eb6d1b9c3.png?size=512")
            .setTitle("List of All My Commands")
            .setFooter("© KITT | Saptarshi Basu")
            .setTimestamp()
            .setDescription("`"+files.join("`  `")+"`");
        message.reply(embed);

    }
}

export default Help as Command;