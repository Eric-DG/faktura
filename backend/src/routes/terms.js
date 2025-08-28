import { Terms } from '../models/Terms.js';

export default async function termsRoutes(fastify) {
  // GET /api/terms?lang=en|sv
  fastify.get('/terms', async (req, reply) => {
    const lang = (req.query.lang || 'en').toLowerCase();
    const row = await Terms.findOne({ where: { lang } });
    if (!row) return reply.code(404).send({ error: 'Not found' });
    return row;
  });
}
