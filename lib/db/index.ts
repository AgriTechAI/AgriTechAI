import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env" });


let db: ReturnType<typeof drizzle> | null = null;

export const getDb = async () => {
  if (!db) {
    const sql = neon(process.env.DATABASE_URL!);
    db = drizzle({ client: sql });
  }
  return db;
};
