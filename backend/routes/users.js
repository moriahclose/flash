const { ObjectId } = require("fastify-mongodb");
const Users = require("../models/users");

async function routes (fastify, options, next) {

    fastify.post('/users', async (request, reply) => {
        const { username } = request.body;

        try {
            const user = new Users({ username });
            await user.save();
            reply.status(200).send(user);
        } catch(error) {
            reply.status(500).send(error);
        }
        
    });
  
    fastify.get('/users/:id', async (request, reply) => {
        const { id } = request.params;

        try {
            const user = await Users.findById(id);
            reply.status(200).send(user);
        } catch(error) {
            reply.status(500).send(error);
        }
        
    });
  
    fastify.patch('/users/:id', async (request, reply) => {
        const { id } = request.params;
        const updates = request.body;
        console.log({ updates })
        try {
            const user = await Users.findById(id);
            Object.assign(user, updates);
            await user.save();
            reply.status(200).send(user);
        } catch(error) {
            reply.status(500).send(error);
        }
    });
  
    fastify.delete('/users/:id', async (request, reply) => {
        const { id } = request.params;

        try {
            const { deletedCount } = await Users.deleteOne( { _id: ObjectId(id) } );

            if (!deletedCount) {
                reply.status(404).send("User not found");
            }

            reply.status(204);
        } catch(error) {
            reply.status(500).send(error);
        }
    });

    next();
}
  
module.exports = routes