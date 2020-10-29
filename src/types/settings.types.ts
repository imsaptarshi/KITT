import { StringLiteral } from "typescript";

export enum Modes {
    "ACTIVE" = "ACTIVE",
    "MAINTAINANCE" = "MAINTAINANCE"
};

export enum ActivityTypes{
    "PLAYING"="PLAYING",
    "LISTENING"="LISTENING"
}

export interface Activity{
    activity_name:string;
    activity_type:ActivityTypes;
}
export interface Settings {
    prefix: string;
    servers: number;
    mode: Modes;
    activity: Activity;
};