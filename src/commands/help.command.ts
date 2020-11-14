import Discord from "discord.js";
import { DefaultSettings } from "../models/settings/settings.model";
import { Command } from "../types/commands.types";

const Help: Command = {
    name: "help",
    type: "",
    help: {
        name: "Help",
        usage: `${DefaultSettings.prefix}help`,
        description: "Helps you with all my commands"
    },
    run: async (message: Discord.Message, client: Discord.Client) => {
        if (message.content.indexOf(" ") != -1 && message.content.split(" ").length == 2) {
            const params: string = message.content.split(" ")[1];
            var CommandName;
            try {
                CommandName = require(`./${params}.command`);
            }
            catch (e) {
                message.reply("The command doesn't exist or is not enabled.\nTry checking for typos if you're sure that exists");
                console.log("Command not available");
                return
            }
            let embed = new Discord.MessageEmbed()
                .setColor([35, 145, 209])
                .setAuthor("KITT", "https://images.discordapp.net/avatars/521765880380653598/5980ab0945f7f4ad1fe59a7eb6d1b9c3.png?size=512")
                .setTitle(CommandName.default.help.name)
                .setFooter("© KITT | Saptarshi Basu")
                .setTimestamp()
                .setDescription(`**Usage**: ${CommandName.default.help.usage}\n**Description**: ${CommandName.default.help.description}\n\n`);
            message.reply(embed);
            return
        }

        const fs = require("fs");
        const files = await fs.promises.readdir("./src/commands");
        for (let i = 0; i < files.length; i++) {
            files[i] = files[i].slice(0, files[i].indexOf("."));
        }
        let embed = new Discord.MessageEmbed()
            .setColor([35, 145, 209])
            .setAuthor("KITT", "https://images.discordapp.net/avatars/521765880380653598/5980ab0945f7f4ad1fe59a7eb6d1b9c3.png?size=512")
            .setTitle("List of All My Commands")
            .setFooter("© KITT | Saptarshi Basu")
            .setTimestamp()
            .setDescription("`" + files.join("`, `") + "`" + "\n\n**Usage**\n" + "Use `" + DefaultSettings.prefix + "help <command_name>` to get details on a specific command.");
        message.author.send(embed);
        message.reply("👋 I've sent you a DM with all my commands!");

    }
}

export default Help as Command;