import { agriculturalMachines, fertilizers, seeds } from "@/const/caraousals";
import { db } from "@/lib/db";
import { getProductsByType } from "@/lib/db/helper";
import {
  agriculturalMachinesTable,
  fertilizersTable,
  productsTable,
  seedsTable,
} from "@/lib/db/schema";

async function seed() {
  fertilizers.forEach(async (fertilizer) => {
    const productId = await db
      .insert(productsTable)
      .values({
        name: fertilizer.name,
        description: fertilizer.description,
        category: "Fertilizers",
        price: fertilizer.price_per_kg.toString(),
        stock: 100,
        imageUrl: `/img/${fertilizer.imageName}`,
      })
      .returning({ productId: productsTable.productId });

    await db
      .insert(fertilizersTable)
      .values({
        productId: productId[0].productId,
        type: "Organic",
        nutrientContent: "",
        recommendedCrops: "",
      })
      .catch((error) => {
        console.error(
          `Error inserting fertilizer for ${fertilizer.name}:`,
          error
        );
      });
  });
  seeds.forEach(async (seed) => {
    const productId = await db
      .insert(productsTable)
      .values({
        name: seed.name,
        description: seed.description,
        category: "Seeds",
        price: seed.price_per_kg.toString(),
        stock: 100,
        imageUrl: `/img/${seed.imageName}`,
      })
      .returning({ productId: productsTable.productId });

    await db
      .insert(seedsTable)
      .values({
        productId: productId[0].productId,
        cropType: "",
        growthDuration: 0,
        climateSuitability: "",
      })
      .catch((error) => {
        console.error(`Error inserting seed for ${seed.name}:`, error);
      });
  });
  agriculturalMachines.forEach(async (machine) => {
    const productId = await db
      .insert(productsTable)
      .values({
        name: machine.name,
        description: machine.description,
        category: "Agricultural Machines",
        price: machine.price_per_kg.toString(),
        stock: 100,
        imageUrl: `/img/${machine.imageName}`,
      })
      .returning({ productId: productsTable.productId });

    await db
      .insert(agriculturalMachinesTable)
      .values({
        productId: productId[0].productId,
        machineType: "",
        powerSource: "Manual",
        specifications: "",
      })
      .catch((error) => {
        console.error(
          `Error inserting agricultural machine for ${machine.name}:`,
          error
        );
      });
  });
}

// seed();
async function get() {
  console.log("Database seeded");
  console.log(JSON.stringify(await getProductsByType("Fertilizer")));
  console.log(JSON.stringify(await getProductsByType("Seed")));
  console.log(JSON.stringify(await getProductsByType("AgriculturalMachine")));
}

get();
