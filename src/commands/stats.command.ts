import Discord, { MessageEmbed } from "discord.js";
import { DefaultSettings } from "../models/settings/settings.model";
import {Command} from "../types/commands.types";

const Stats:Command={
    name:"stats",
    type:"",
    help:{
        name:"Stats",
        usage:`${DefaultSettings.prefix}stats`,
        description:"Shows the current bot statistics"
    },
    run:async (message:Discord.Message,client:Discord.Client)=>{
        var channel_count=0;
        client.channels.cache.map((data)=>{if(data.type!=="category") channel_count+=1;})
        let totalSeconds = (Number(client.uptime) / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} day(s), ${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)`;
        let embed=new MessageEmbed()
            .setColor([35,145,209])
            .setAuthor("KITT","https://images.discordapp.net/avatars/521765880380653598/5980ab0945f7f4ad1fe59a7eb6d1b9c3.png?size=512")
            .setTitle("Statistics of KITT | Discord Bot")
            .setFooter("© KITT | Saptarshi Basu")
            .setTimestamp()
            .addField("Server Count",`${client.guilds.cache.size}`)
            .addField("Channel Count",`${channel_count}`)
            .addField("Platform",`${"Win32"}`)
            .addField("Node-Version",`${"v12.18.3"}`)
            .addField("Shards",`${client.options.shardCount}`)
            .addField("Uptime",`${uptime}`)
        message.reply(embed);
    }
}

export default Stats as Command;