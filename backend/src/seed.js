import { sequelize } from './db.js';
import { Terms } from './models/Terms.js';
import { Product } from './models/Product.js';

await sequelize.sync({ force: true });

await Terms.bulkCreate([
  { lang:'en', title:'Terms & Conditions', body:'<h2>Introduction</h2><p>…</p>' },
  { lang:'sv', title:'Villkor', body:'<h2>Introduktion</h2><p>…</p>' },
]);

const units = ['kilometers/hour','pcs','kg','hr'];
const rows = Array.from({ length: 22 }, (_,i)=>({
  article_no: `1234567${(890+i)}`,
  name: i===0 ? 'This is a test product with fifty characters this!' : `Random product ${i}`,
  in_price: 900500 + i,
  price: 1500800 + i,
  unit: units[i % units.length],
  in_stock: 1500800 + i,
  description: 'This is the description with fifty characters this',
}));
await Product.bulkCreate(rows);

console.log('Seeded ✅');
process.exit(0);
