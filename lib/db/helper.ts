import { db } from "@/lib/db";
import {
  agriculturalMachinesTable,
  fertilizersTable,
  productsTable,
  seedsTable,
} from "./schema";
import { eq } from "drizzle-orm";

export async function getProductsByType(
  type: "Fertilizer" | "Seed" | "AgriculturalMachine"
) {
  switch (type) {
    case "Fertilizer":
      return await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.category, "Fertilizers"));
    case "Seed":
      return await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.category, "Seeds"));
    case "AgriculturalMachine":
      return await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.category, "Agricultural Machines"));
  }
}

export async function getProductById(
  id: number,
  type: "Fertilizer" | "Seed" | "AgriculturalMachine"
) {
  switch (type) {
    case "Fertilizer":
      return await db
        .select()
        .from(fertilizersTable)
        .where(eq(fertilizersTable.productId, id));
    case "Seed":
      return await db
        .select()
        .from(seedsTable)
        .where(eq(seedsTable.productId, id));
    case "AgriculturalMachine":
      return await db
        .select()
        .from(agriculturalMachinesTable)
        .where(eq(agriculturalMachinesTable.productId, id));
  }
}
