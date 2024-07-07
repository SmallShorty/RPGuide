const { VK } = require('vk-io');
const dotenv = require('dotenv');
const {bot} = require("./hearManager");
const commands = require("./commands");


dotenv.config();

const vk = new VK({
    token: process.env.API_TOKEN
});

vk.updates.on('message_new', bot.middleware);

commands.forEach((command) => command(bot));

vk.updates.start().catch(console.error);