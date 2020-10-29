import Discord from "discord.js";
import {Command} from "../types/commands.types";

const Ping:Command={
    name:"ping",
    type:"",
    help:{
        name:"Ping",
        code:"!ping",
        usage:""
    },
    run:async (message:any,client?:Discord.Client)=>{
        message.reply("Wait a sec...").then((m:any)=>{
        let embed=new Discord.MessageEmbed()
            .setColor([35,145,209])
            .setAuthor("KITT","https://images.discordapp.net/avatars/521765880380653598/5980ab0945f7f4ad1fe59a7eb6d1b9c3.png?size=512")
            .setTitle("🏓  Pong!")
            .setFooter("© KITT | Saptarshi Basu")
            .setTimestamp()
            .addField("Latency",`${m.createdTimestamp - message.createdTimestamp}ms`,true)
            .addField("API Latency",`${client?.ws.ping}ms`,true)
        m.edit(embed);
        });
    }
}

export default Ping as Command;