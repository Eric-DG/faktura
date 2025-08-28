import { Op } from 'sequelize';
import { Product } from '../models/Product.js';

export default async function productsRoutes(fastify) {
  // GET /api/pricelist
  fastify.get('/pricelist', async (req) => {
    const { q } = req.query ?? {};
    const where = q ? { name: { [Op.iLike]: `%${q}%` } } : undefined;
    return Product.findAll({ where, order: [['id', 'ASC']] });
  });

  // PUT /api/pricelist/:id
  fastify.put('/pricelist/:id', async (req, reply) => {
    const id = Number(req.params.id);
    const allowed = ['article_no','name','in_price','price','unit','in_stock','description'];
    const body = req.body || {};
    const payload = Object.fromEntries(Object.entries(body).filter(([k]) => allowed.includes(k)));

    const [count, [updated]] = await Product.update(payload, { where: { id }, returning: true });
    if (!count) return reply.code(404).send({ error: 'Not found' });
    return updated;
  });
}
