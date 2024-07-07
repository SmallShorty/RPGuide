module.exports = async (bot) => {
    bot.hear(
        {
            text: 'start'
        },
        async (context) => {
            await context.send('This is a start message!');
        }
    );
}