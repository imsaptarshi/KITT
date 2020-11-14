import { DefaultSettings, init } from "./models/settings/settings.model";
import { Modes } from "./types/settings.types";
import Discord from "discord.js";
const path=require("path");
require("dotenv").config()

export const client: Discord.Client = new Discord.Client();

client.on("message", (message: Discord.Message) => {
    init()
        .then(() => {
            client.user?.setActivity(
                DefaultSettings.activity.activity_name,
                ({
                    type: DefaultSettings.activity.activity_type
                }))

            if (!message.content.startsWith(DefaultSettings.prefix)) return

            const cmd: string = ((message.content.slice(DefaultSettings.prefix.length)).split(" "))[0];

            try {
                if (DefaultSettings.mode == Modes.ACTIVE || cmd.startsWith("setmode")) {
                    const Command = require(`./commands/${cmd}.command`);
                    Command.default.run(message, client);
                }
                else {
                    message.reply("Unfortunately KITT is currently under Maintainance, try communicating Server Admin or Bot Owner");
                }
            }
            catch (e) {
                console.log("Command not available");
            }
        })
})
client.login(process.env.BOT_TOKEN);