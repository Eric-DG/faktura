import Fastify from 'fastify';
import cors from '@fastify/cors';
import 'dotenv/config';

import termsRoutes from './routes/terms.js';
import productsRoutes from './routes/products.js';

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: process.env.CLIENT_ORIGIN || true,
});

app.get('/health', async () => 'ok');

// ✅ Register only necessary routes
app.register(termsRoutes, { prefix: '/api' });
app.register(productsRoutes, { prefix: '/api' });

const PORT = Number(process.env.PORT) || 8080;
const HOST = '0.0.0.0';

try {
  await app.listen({ port: PORT, host: HOST });
  app.log.info(`🚀 Server listening on http://localhost:${PORT}`);
} catch (err) {
  app.log.error('❌ Server boot failed:', err);
  process.exit(1);
}
