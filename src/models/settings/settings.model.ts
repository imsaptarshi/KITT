import { Settings, Modes, ActivityTypes } from "../../types/settings.types";

export const DefaultSettings: Settings = {
    prefix: "!",
    servers: 0,
    mode: Modes.ACTIVE,
    activity: {
        activity_name: "!help",
        activity_type: ActivityTypes.LISTENING
    }
};

export const setPrefix = (prefix: string): void => {
    DefaultSettings.prefix = prefix;
}
export const setServers = (servers: number): void => {
    DefaultSettings.servers = servers;
}
export const setMode = (mode: Modes): void => {
    DefaultSettings.mode = mode;
}

