const Fastify = require('fastify');
const mongoose = require('mongoose');
const swagger = require('./swagger');

const users = require('./routes/users');
const decks = require('./routes/decks');
const cards = require('./routes/cards');

const fastify = Fastify({
    logger: true
});

fastify.register(require('fastify-swagger'), swagger.options);

mongoose.connect('mongodb+srv://moriah:CyiEap9FU8tYsriC@flash.d7727.mongodb.net?retryWrites=true&w=majority');

fastify.register(users);
fastify.register(decks);
fastify.register(cards);

const start = async () => {
    try {
        await fastify.listen(3003);
        fastify.swagger();
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();