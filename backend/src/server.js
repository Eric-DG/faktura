// src/server.js
import Fastify from 'fastify';
import cors from '@fastify/cors';
import 'dotenv/config';
import seedRoutes from "./routes/seed.js";
import { connectDB, sequelize } from './db.js';
import termsRoutes from './routes/terms.js';
import productsRoutes from './routes/products.js';

import './models/Terms.js';
import './models/Product.js';

const app = Fastify({
  logger: true,
});


await app.register(cors, {
  origin: process.env.CLIENT_ORIGIN || true,
});


app.get('/health', async () => 'ok');

try {
  await connectDB();

  if (process.env.SYNC_DB === 'true') {
    await sequelize.sync();
    app.log.info('✅ Sequelize sync complete');
  }


  app.register(termsRoutes, { prefix: '/api' });
  app.register(productsRoutes, { prefix: '/api' });
app.register(seedRoutes, { prefix: "/api" });
  const PORT = Number(process.env.PORT) || 8080;
  const HOST = '0.0.0.0';

  await app.listen({ port: PORT, host: HOST });
  app.log.info(`🚀 Server listening on http://localhost:${PORT}`);
} catch (err) {
  app.log.error('❌ Server boot halted:', err);
  process.exit(1);
}


const shutdown = async (signal) => {
  try {
    app.log.info(`📴 Received ${signal}, closing...`);
    await app.close();
    process.exit(0);
  } catch (e) {
    app.log.error('Error during shutdown', e);
    process.exit(1);
  }
};
['SIGINT', 'SIGTERM'].forEach(s => process.on(s, () => shutdown(s)));
