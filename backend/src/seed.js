// src/seed.js
import { sequelize } from "./db.js";
import { Terms } from "./models/Terms.js";
import { Product } from "./models/Product.js";

export async function seed() {
  try {
    console.log("🌱 Seeding database...");

    // Recreate tables
    await sequelize.sync({ force: true });

    // Insert terms
    await Terms.bulkCreate([
      {
        lang: "en",
        title: "Terms & Conditions",
        body: "<h2>Introduction</h2><p>Welcome to our system. These are the terms in English.</p>",
      },
      {
        lang: "sv",
        title: "Villkor",
        body: "<h2>Introduktion</h2><p>Välkommen till vårt system. Dessa är villkoren på svenska.</p>",
      },
    ]);

    // Insert products
    const units = ["kilometers/hour", "pcs", "kg", "hr"];
    const rows = Array.from({ length: 22 }, (_, i) => ({
      article_no: `1234567${890 + i}`,
      name:
        i === 0
          ? "This is a test product with fifty characters this!"
          : `Random product ${i}`,
      in_price: 900500 + i,
      price: 1500800 + i,
      unit: units[i % units.length],
      in_stock: 1500800 + i,
      description: "This is the description with fifty characters this",
    }));

    await Product.bulkCreate(rows);

    console.log("✅ Seeding complete!");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    throw err;
  }
}

// Run directly via `node src/seed.js`
if (process.argv[1].includes("seed.js")) {
  seed().then(() => process.exit(0));
}
