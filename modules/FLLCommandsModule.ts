import { Client, MessageEmbed } from 'discord.js';

export default class FLLCommands {
    constructor(bot: Client) {
        bot.on('message', msg => {
            if (msg.channel.type !== "text") {
                return;
            }

            let cleanedMessage = msg.cleanContent.toLowerCase();

            if (cleanedMessage.startsWith('.rulebook')) {
                msg.channel.send(
                    new MessageEmbed()
                        .setTitle("Replay Rulebook")
                        .setColor('#ff2e17')
                        .setThumbnail('https://www.firstinspires.org/sites/default/files/uploads/resource_library/fll/replay/replay-fullcolor.png')
                        .setURL('https://firstinspiresst01.blob.core.windows.net/first-game-changers/fll-challenge/FLL-Challenge-RGR-Final.pdf')
                        .setDescription('Your goal when playing the Robot Game is to get as many points as you can. But your reason for playing is to become confident experts at solving technical problems as a team ... while having FUN!')
                )
            }

            if (cleanedMessage.startsWith('.missions')) {
                msg.channel.send(
                    new MessageEmbed()
                        .setTitle("Missions for FLL Replay")
                        .setColor('#ff2e17')
                        .setDescription('For more information on a mission run .mission MXX')
                        .setThumbnail('https://www.firstinspires.org/sites/default/files/uploads/resource_library/fll/replay/replay-fullcolor.png')
                        .addFields(
                            { name: 'M00 - Equipment Inspection Bonus', value: 'Max Points: 25', inline: true },
                            { name: 'M01 - Innovation Project', value: 'Max Points: 20', inline: true },
                            { name: 'M02 - Step Counter', value: 'Max Points: 20', inline: true },
                            { name: 'M03 - Slide', value: 'Max Points: 50', inline: true },
                            { name: 'M04 - Bench', value: 'Max Points: 65', inline: true },
                            { name: 'M05 - Basketball', value: 'Max Points: 40', inline: true },
                            { name: 'M06 - Pull-Up Bar', value: 'Max Points: 45', inline: true },
                            { name: 'M07 - Robot Dance', value: 'Max Points: 20', inline: true },
                            { name: 'M08 - Boccia', value: 'Max Points: ???', inline: true },
                            { name: 'M09 - Tire Flip', value: 'Max Points: 35', inline: true },
                            { name: 'M10 - Cell Phone', value: 'Max Points: 15', inline: true },
                            { name: 'M11 - Treadmill', value: 'Max Points: 30', inline: true },
                            { name: 'M12 - Row Machine', value: 'Max Points: 30', inline: true },
                            { name: 'M13 - Weight Machine', value: 'Max Points: 20', inline: true },
                            { name: 'M14 - Health Units', value: 'Max Points: 60', inline: true },
                            { name: 'M15 - Precision', value: 'Max Points: 60', inline: true }
                        )
                )
            }

            if (cleanedMessage.startsWith('.mission m00')) {
                msg.channel.send(
                    new MessageEmbed()
                        .setTitle('Equipment Inspection Bonus')
                        .setColor('#ff2e17')
                        .setThumbnail('https://www.firstinspires.org/sites/default/files/uploads/resource_library/fll/replay/replay-fullcolor.png')
                        .setDescription('“Doing the same with less” can save time and space.')
                        .addFields(
                            { name: 'If all your equipment fits in the small inspection space:', value: '25 points' },
                        )
                        .setImage('https://i.ibb.co/gRcwb7p/Screen-Shot-2020-09-07-at-12-29-18-PM.png')
                )
            }

            if (cleanedMessage.startsWith('.mission m01')) {
                msg.channel.send(
                    new MessageEmbed()
                        .setTitle('Innovation Project')
                        .setColor('#ff2e17')
                        .setThumbnail('https://www.firstinspires.org/sites/default/files/uploads/resource_library/fll/replay/replay-fullcolor.png')
                        .setDescription('The robot moves your Innovation Project onto the RePLAY logo or the gray area around the bench. Build and bring a single model that represents your solution to the Innovation Project. The one shown here is just an example. CAUTION: Your Innovation Project counts as equipment.')
                        .addFields(
                            { name: 'If your Innovation Project:\nIs made of at least two white LEGO pieces\nMeasures at least as long as four LEGO studs in at least one direction\nHas any part of it touching either the RePLAY logo or the gray area around the bench:', value: '20 points' },
                        )
                        .setImage('https://i.ibb.co/ngDcngs/Screen-Shot-2020-09-07-at-12-35-36-PM.png')
                )
            }

            if (cleanedMessage.startsWith('.mission m02')) {
                msg.channel.send(
                    new MessageEmbed()
                        .setTitle('Step Counter')
                        .setColor('#ff2e17')
                        .setThumbnail('https://www.firstinspires.org/sites/default/files/uploads/resource_library/fll/replay/replay-fullcolor.png')
                        .setDescription('The robot slides the step counter slow and steady. The farther the “walk,” the better.')
                        .addFields(
                            { name: 'If the bottom of the pointer is on magenta:', value: '10 points' },
                            { name: 'If the bottom of the pointer is on yellow:', value: '15 points' },
                            { name: 'If the bottom of the pointer is on blue:', value: '20 points' },
                        )
                        .setImage('https://i.ibb.co/dmQx46T/Screen-Shot-2020-09-07-at-12-39-36-PM.png')
                )
            }

            if (cleanedMessage.startsWith('.mission m03')) {
                msg.channel.send(
                    new MessageEmbed()
                        .setTitle('Slide')
                        .setColor('#ff2e17')
                        .setThumbnail('https://www.firstinspires.org/sites/default/files/uploads/resource_library/fll/replay/replay-fullcolor.png')
                        .setDescription('The robot slides the people (called “slide figures”) down the slide and moves them to other areas. “Off the slide” scores if the slide figure’s black frame is past/ below the tip of the slide’s gray slide part. Notice the score for two slide figures off is 20, not 25.')
                        .addFields(
                            { name: 'If only one slide figure is off the slide:', value: '5 points' },
                            { name: 'If both slide figures are off the slide:', value: '20 points' },
                            { name: 'If a slide figure is completely in home:', value: '10 points (max)' },
                            { name: ' If a slide figure is held completely off the mat by the heavy tire and is touching nothing else:', value: '20 points (max)' },
                        )
                        .setImage('https://i.ibb.co/vB5T82t/Screen-Shot-2020-09-07-at-2-18-40-PM.png')
                )
            }

            if (cleanedMessage.startsWith('.mission m04')) {
                msg.channel.send(
                    new MessageEmbed()
                        .setTitle('Bench')
                        .setColor('#ff2e17')
                        .setThumbnail('https://www.firstinspires.org/sites/default/files/uploads/resource_library/fll/replay/replay-fullcolor.png')
                        .setDescription('The robot removes the backrest, flattens the bench, and gets cubes into the hopscotch spaces.')
                        .addFields(
                            { name: 'If the bench is down flat:', value: '10 points' },
                            { name: 'If the bench is down flat and there are cubes touching the mat in hopscotch spaces:', value: '10 points per space' },
                            { name: 'If the backrest is completely out of both of its holes:', value: '15 points' }
                        )
                        .setImage('https://i.ibb.co/sWGYPVy/Screen-Shot-2020-09-07-at-2-21-43-PM.png')
                )
            }

            if (cleanedMessage.startsWith('.mission m05')) {
                msg.channel.send(
                    new MessageEmbed()
                        .setTitle('Basketball')
                        .setColor('#ff2e17')
                        .setThumbnail('https://www.firstinspires.org/sites/default/files/uploads/resource_library/fll/replay/replay-fullcolor.png')
                        .setDescription('The robot raises the crate up the post and gets a cube into it. Only one cube can score in the crate. Score top height or middle height, not both.')
                        .addFields(
                            { name: 'If there is a cube in the crate:', value: '15 points' },
                            { name: 'If the crate rests on the middle height’s white stopper:', value: '15 points' },
                            { name: 'If the crate rests on the top height’s white stopper:', value: '25 points' }
                        )
                        .setImage('https://i.ibb.co/sq21hfY/Screen-Shot-2020-09-07-at-2-26-39-PM.png')
                )
            }
        });
    }
}