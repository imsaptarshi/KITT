import Discord, { MessageEmbed } from "discord.js";
import { DefaultSettings, setPrefix } from "../models/settings/settings.model";
import { Command } from "../types/commands.types";

const SetPrefix: Command = {
    name: "setprefix",
    type: "",
    help: {
        name: "Set Prefix",
        usage: `${DefaultSettings.prefix}setprefix <prefix>`,
        description: "Changes the current prefix"
    },
    run: async (message: Discord.Message, client: Discord.Client) => {
        if (message.author.id === "386801716462485504" && message.content.split(" ")[1] !== undefined) {
            const params: string = message.content.split(" ")[1];
            if(params.length<=3){
            setPrefix(params);
            let embed = new MessageEmbed()
                .setColor([35, 145, 209])
                .setAuthor("KITT", "https://images.discordapp.net/avatars/521765880380653598/5980ab0945f7f4ad1fe59a7eb6d1b9c3.png?size=512")
                .setTitle("Prefix For KITT Has Been Changed")
                .setFooter("© KITT | Saptarshi Basu")
                .setTimestamp()
                .setDescription(`The new prefix for KITT is ${params}`);
            message.reply(embed);
            }
            else{
                let embed = new MessageEmbed()
                .setColor([35, 145, 209])
                .setAuthor("KITT", "https://images.discordapp.net/avatars/521765880380653598/5980ab0945f7f4ad1fe59a7eb6d1b9c3.png?size=512")
                .setTitle("Prefix For KITT Can't Be Changed")
                .setFooter("© KITT | Saptarshi Basu")
                .setTimestamp()
                .setDescription(`prefix cant be more that 3 characters`);
            message.reply(embed);
            }
        }
        else if (message.content.split(" ")[1] === undefined) {
            message.reply(`prefix cannot be blank, refer to \`${DefaultSettings.prefix}help setprefix\``);
        }
        else {
            message.reply("Seems like you don't have the right permissions to use this command.\n*for now its only enabled for bot owner*");
        }
    }
}

export default SetPrefix as Command;