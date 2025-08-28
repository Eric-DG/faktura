// src/db.js
import { Sequelize } from 'sequelize';
import 'dotenv/config';

const isProd = process.env.RENDER === 'true' || process.env.NODE_ENV === 'production';

let databaseUrl =
  process.env.DATABASE_URL ||
  'postgres://postgres:postgres@127.0.0.1:5432/postgres';

// Ensure SSL is requested in prod if not already in the URL
if (isProd && !/sslmode=/i.test(databaseUrl)) {
  databaseUrl += (databaseUrl.includes('?') ? '&' : '?') + 'sslmode=require';
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  logging: false,
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
  dialectOptions: isProd
    ? { ssl: { require: true, rejectUnauthorized: false } }
    : {}
});

export { sequelize };

export async function connectDB(retries = 5, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      await sequelize.authenticate();
      console.log('✅ Database connected');
      return;
    } catch (err) {
      console.error(`DB connect failed (${i + 1}/${retries}):`, err?.message || err);
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, delay));
    }
  }
}
