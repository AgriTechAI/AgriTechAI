import { db } from "@/lib/db";
import {
  agriculturalMachinesTable,
  fertilizersTable,
  productsTable,
  seedsTable,
} from "./schema";
import { eq } from "drizzle-orm";

export async function getProductsByType(
  type: "Fertilizer" | "Seeds" | "Agricultural Machines"
) {
  switch (type) {
    case "Fertilizer":
      return await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.category, "Fertilizers"));
    case "Seeds":
      return await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.category, "Seeds"));
    case "Agricultural Machines":
      return await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.category, "Agricultural Machines"));
  }
}

export async function getProductById(id: number) {
  const product = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.productId, id));
  switch (product[0].category) {
    case "Fertilizers":
      return {
        ...product[0],
        ...(
          await db
            .select()
            .from(fertilizersTable)
            .where(eq(fertilizersTable.productId, id))
        )[0],
      };
    case "Seeds":
      return {
        ...product[0],
        ...(
          await db.select().from(seedsTable).where(eq(seedsTable.productId, id))
        )[0],
      };
    case "Agricultural Machines":
      return {
        ...product[0],
        ...(
          await db
            .select()
            .from(agriculturalMachinesTable)
            .where(eq(agriculturalMachinesTable.productId, id))
        )[0],
      };
  }
}
