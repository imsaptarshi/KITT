import { DefaultSettings } from "./models/settings/settings.model";
import { Modes } from "./types/settings.types";
import Discord from "discord.js";
import dotenv from "dotenv";
if (!process.env.BOT_TOKEN) {
    dotenv.config({ path: __dirname + "/.env" });
}
import express from "express";

const app:express = express();
const port = 3000;
app.get('/', (req:any, res:any) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

export const client: Discord.Client = new Discord.Client();

client.on("message", (message: Discord.Message) => {
    client.user?.setActivity(
        DefaultSettings.activity.activity_name,
        ({
            type: DefaultSettings.activity.activity_type
        }))

    if (!message.content.startsWith(DefaultSettings.prefix)) return

    const cmd: string = ((message.content.slice(DefaultSettings.prefix.length)).split(" "))[0];

    try {
        if(DefaultSettings.mode==Modes.ACTIVE || cmd.startsWith("setmode")){
            const Command = require(`./commands/${cmd}.command`);
            Command.default.run(message, client);
        }
        else{
            message.reply("Unfortunately KITT is currently under Maintainance, try communicating Server Admin or Bot Owner");
        }
    }
    catch (e) {
        message.reply("The command doesn't exist or is not enabled.\nTry checking for typos if you're sure that exists");
        console.log("Command not available");
    }
})
client.login(process.env.BOT_TOKEN);