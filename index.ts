import { Client } from 'discord.js';
import express from 'express';
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

            const app = express()

            app.get('/info', (req, res) => {
                res.json({
                    online: true,
                    guilds: this.bot.guilds.cache.size,
                    members: this.bot.users.cache.size
                });
            });

            app.listen(1746, () => {
                console.log('Web Server Running');
            });

        });
    }
}

new Rosie();