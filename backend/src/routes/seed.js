import { seed } from "../seed.js";

export default async function seedRoutes(app) {
  app.post("/seed", async (req, reply) => {
    try {
      await seed();
      return { success: true, message: "Database seeded ✅" };
    } catch (err) {
      app.log.error(err);
      reply.code(500).send({ success: false, error: "Seeding failed ❌" });
    }
  });
}