const { ObjectId } = require("fastify-mongodb");
const Decks = require("../models/decks");

async function routes (fastify, options, next) {

    fastify.post('/users/:id/decks', async (request, reply) => {
        const { id: user } = request.params;
        const { title } = request.body;

        try {
            const deck = new Decks({ user, title });
            await deck.save();
            reply.status(200).send(deck);
        } catch(error) {
            reply.status(500).send(error);
        }
        
    });
  
    fastify.get('/users/:userId/decks', async (request, reply) => {
        const { userId } = request.params;

        try {
            const decks = await Decks.find({ user: userId });
            reply.status(200).send(decks);
        } catch(error) {
            reply.status(500).send(error);
        }
        
    });

    fastify.get('/users/:userId/decks/:deckId', async (request, reply) => {
        const { deckId } = request.params;

        try {
            const deck = await Decks.findById(deckId);
            reply.status(200).send(deck);
        } catch(error) {
            reply.status(500).send(error);
        }
        
    });
  
    fastify.patch('/users/:userId/decks/:deckId', async (request, reply) => {
        const { deckId } = request.params;
        const updates = request.body;

        try {
            const deck = await Decks.findById(deckId);
            Object.assign(deck, updates);
            await deck.save();
            reply.status(200).send(deck);
        } catch(error) {
            reply.status(500).send(error);
        }
    });
  
    fastify.delete('/users/:userId/decks/:deckId', async (request, reply) => {
        const { deckId } = request.params;

        try {
            const { deletedCount } = await Decks.deleteOne( { _id: ObjectId(deckId) } );

            if (!deletedCount) {
                reply.status(404).send("Deck not found");
            }

            reply.status(204);
        } catch(error) {
            reply.status(500).send(error);
        }
    });

    next();
}
  
module.exports = routes