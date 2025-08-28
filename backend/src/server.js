import Fastify from "fastify";
import cors from "@fastify/cors";
import "dotenv/config";
import { connectDB, sequelize } from "./db.js";
import termsRoutes from "./routes/terms.js";
import productsRoutes from "./routes/products.js";
import "./models/Terms.js";
import "./models/Product.js";

const app = Fastify({ logger: true });
await app.register(cors, { origin: true });

await connectDB();
await sequelize.sync();

app.register(termsRoutes, { prefix: "/api" });
app.register(productsRoutes, { prefix: "/api" });

const PORT = process.env.PORT || 8080;
app.listen({ port: PORT, host: "0.0.0.0" });
