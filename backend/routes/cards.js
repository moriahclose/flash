const { ObjectId } = require("fastify-mongodb");
const Cards = require("../models/cards");

async function routes (fastify, options, next) {

    fastify.post('/users/:userId/decks/:deckId/cards', async (request, reply) => {
        const { userId, deckId } = request.params;
        const { term, definition } = request.body;

        try {
            const card = new Cards({
                user: userId,
                deck: deckId,
                term,
                definition,
            });
            await card.save();
            reply.status(200).send(card);
        } catch(error) {
            reply.status(500).send(error);
        }
        
    });
  
    fastify.get('/users/:userId/decks/:deckId/cards', async (request, reply) => {
        const { userId, deckId } = request.params;

        try {
            const cards = await Cards.find({
                user: userId,
                deck: deckId
            });
            reply.status(200).send(cards);
        } catch(error) {
            reply.status(500).send(error);
        }
    });

    fastify.get('/users/:userId/decks/:deckId/cards/:cardId', async (request, reply) => {
        const { cardId } = request.params;

        try {
            const card = await Cards.findById(cardId);
            reply.status(200).send(card);
        } catch(error) {
            reply.status(500).send(error);
        }
        
    });
  
    fastify.patch('/users/:userId/decks/:deckId/cards/:cardId', async (request, reply) => {
        const { cardId } = request.params;
        const updates = request.body;

        try {
            const card = await Cards.findById(cardId);
            Object.assign(card, updates);
            await card.save();
            reply.status(200).send(card);
        } catch(error) {
            reply.status(500).send(error);
        }
    });
  
    fastify.delete('/users/:userId/decks/:deckId/cards/:cardId', async (request, reply) => {
        const { cardId } = request.params;

        try {
            const { deletedCount } = await Cards.deleteOne( { _id: ObjectId(cardId) } );

            if (!deletedCount) {
                reply.status(404).send("Card not found");
            }

            reply.status(204);
        } catch(error) {
            reply.status(500).send(error);
        }
    });

    next();
}
  
module.exports = routes