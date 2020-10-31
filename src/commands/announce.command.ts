import Discord, { MessageEmbed } from "discord.js";
import { DefaultSettings } from "../models/settings/settings.model";
import { Command } from "../types/commands.types";

const Announce: Command = {
    name: "announce",
    type: "",
    help: {
        name: "Announce",
        usage: `${DefaultSettings.prefix}announce <message goes here>`,
        description: "Makes an announcement to all the members of the server"
    },
    run: async (message: Discord.Message, client: Discord.Client) => {
      if(message.content.indexOf(" ")!==-1){
        const msg = message.content.slice(message.content.indexOf(" ")+1);
        message.channel.send("@everyone").then((m: Discord.Message) => {
            let embed = new MessageEmbed()
                .setColor([35, 145, 209])
                .setAuthor(`${message.author.tag}`, `${message.author.avatarURL()}`)
                .setTitle(`Announcement By ${message.author.username}`)
                .setFooter("© KITT | Saptarshi Basu")
                .setTimestamp()
                .setDescription(msg)
            m.edit(embed);
        });
      }
      else{
        message.reply(`Announcement couldn't be blank, refer to \`${DefaultSettings.prefix}help announce\``);
      }
    }
}

export default Announce as Command;