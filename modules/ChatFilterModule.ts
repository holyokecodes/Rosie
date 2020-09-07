import { Client } from 'discord.js';
const Filter = require('bad-words');
const filter = new Filter({ placeHolder: '~' });

export default class ChatFilter {
    constructor(bot: Client) {
        bot.on('message', msg => {
            
            if (msg.channel.type !== "text") {
                return;
            }

            let textCleanedMessage = msg.cleanContent;

            textCleanedMessage = filter.clean(textCleanedMessage);

            if (textCleanedMessage.includes('~')) {
                msg.channel.send('Please avoid using that language in this server');
                msg.delete();
            }
        });
    }
}