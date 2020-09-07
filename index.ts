import { Client } from 'discord.js';
import config from './config.json';
import ChatFilter from './modules/ChatFilterModule';
import FLLCommands from './modules/FLLCommandsModule';

class Rosie {
    bot: Client;

    constructor() {
        this.bot = new Client();
        this.registerModules();
        this.registerEvents();

        this.bot.login(config.discord_token);
    }

    registerModules() {
        new ChatFilter(this.bot);
        new FLLCommands(this.bot);
    }

    registerEvents() {
        this.bot.on('ready', () => {
            console.log(`Logged in as ${this.bot.user.tag}!`);


            this.bot.user.setActivity('.missions', {
                type: 'LISTENING'
            });
        });
    }
}

new Rosie();