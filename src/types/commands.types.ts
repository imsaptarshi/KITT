export interface Command {
    name: string;
    type: string;
    help: CommandHelp;
    run: any;
}
interface CommandHelp {
    name: string;
    usage: string;
    description: string;
}