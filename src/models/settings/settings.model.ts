import { Settings, Modes, ActivityTypes } from "../../types/settings.types";
import axios from "axios";
require("dotenv").config()
const port = process.env.PORT || 3000;

export const init = async function () {
    await axios.get(`http://localhost:${port}/settings`)
        .then((res: any) => {
            DefaultSettings.prefix = res.data[0].prefix;
            DefaultSettings.activity.activity_name = `${res.data[0].prefix}help`
        })
}

export const DefaultSettings: Settings = {
    prefix: "!",
    servers: 0,
    mode: Modes.ACTIVE,
    activity: {
        activity_name: `!help`,
        activity_type: ActivityTypes.LISTENING
    }
};

export const setPrefix = (prefix: string): void => {
    axios.post(`http://localhost:${port}/settings/update`, { prefix })
        .then(() => {
            console.log("Prefix updated!")
        })
}
export const setServers = (servers: number): void => {
    DefaultSettings.servers = servers;
}
export const setMode = (mode: Modes): void => {
    DefaultSettings.mode = mode;
}

