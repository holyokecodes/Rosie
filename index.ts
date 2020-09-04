import { Client } from 'discord.js';
import config from './config.json';
import ChatFilter from './modules/ChatFilterModule';

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
    }

    registerEvents() {
        this.bot.on('ready', () => {
            console.log(`Logged in as ${this.bot.user.tag}!`);
        });
    }
}

new Rosie();