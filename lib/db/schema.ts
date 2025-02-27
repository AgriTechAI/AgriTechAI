import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  decimal,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";

// Enums
export const productCategoryEnum = pgEnum("category", [
  "Fertilizers",
  "Seeds",
  "Agricultural Machines",
]);
export const fertilizerTypeEnum = pgEnum("fertilizer_type", [
  "Organic",
  "Inorganic",
]);
export const powerSourceEnum = pgEnum("power_source", [
  "Manual",
  "Electric",
  "Fuel",
]);
export const orderStatusEnum = pgEnum("order_status", [
  "Pending",
  "Shipped",
  "Delivered",
  "Cancelled",
]);

// Users Table
export const usersTable = pgTable("users", {
  userId: serial("user_id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 15 }),
  address: text("address"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Products Table
export const productsTable = pgTable("products", {
  productId: serial("product_id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  category: productCategoryEnum("category").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  stock: integer("stock").notNull(),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Fertilizers Table
export const fertilizersTable = pgTable("fertilizers", {
  fertilizerId: serial("fertilizer_id").primaryKey(),
  productId: integer("product_id")
    .references(() => productsTable.productId, { onDelete: "cascade" })
    .notNull(),
  type: fertilizerTypeEnum("type").notNull(),
  nutrientContent: varchar("nutrient_content", { length: 255 }),
  recommendedCrops: varchar("recommended_crops", { length: 255 }),
});

// Seeds Table
export const seedsTable = pgTable("seeds", {
  seedId: serial("seed_id").primaryKey(),
  productId: integer("product_id")
    .references(() => productsTable.productId, { onDelete: "cascade" })
    .notNull(),
  cropType: varchar("crop_type", { length: 255 }).notNull(),
  growthDuration: integer("growth_duration"),
  climateSuitability: varchar("climate_suitability", { length: 255 }),
});

// Agricultural Machines Table
export const agriculturalMachinesTable = pgTable("agricultural_machines", {
  machineId: serial("machine_id").primaryKey(),
  productId: integer("product_id")
    .references(() => productsTable.productId, { onDelete: "cascade" })
    .notNull(),
  machineType: varchar("machine_type", { length: 255 }).notNull(),
  powerSource: powerSourceEnum("power_source").notNull(),
  specifications: text("specifications"),
});

// Orders Table
export const ordersTable = pgTable("orders", {
  orderId: serial("order_id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.userId)
    .notNull(),
  orderStatus: orderStatusEnum("order_status").default("Pending"),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  orderDate: timestamp("order_date").defaultNow(),
});

// Order Items Table
export const orderItemsTable = pgTable("order_items", {
  orderItemId: serial("order_item_id").primaryKey(),
  orderId: integer("order_id")
    .references(() => ordersTable.orderId, { onDelete: "cascade" })
    .notNull(),
  productId: integer("product_id")
    .references(() => productsTable.productId)
    .notNull(),
  quantity: integer("quantity").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
});

// Reviews Table
export const reviewsTable = pgTable("reviews", {
  reviewId: serial("review_id").primaryKey(),
  productId: integer("product_id")
    .references(() => productsTable.productId, { onDelete: "cascade" })
    .notNull(),
  userId: integer("user_id")
    .references(() => usersTable.userId)
    .notNull(),
  rating: integer("rating").notNull(), // Add check constraint in migration
  comment: text("comment"),
  reviewDate: timestamp("review_date").defaultNow(),
});

// Wishlist Table
export const wishlistTable = pgTable("wishlist", {
  wishlistId: serial("wishlist_id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.userId, { onDelete: "cascade" })
    .notNull(),
  productId: integer("product_id")
    .references(() => productsTable.productId, { onDelete: "cascade" })
    .notNull(),
  addedDate: timestamp("added_date").defaultNow(),
});

export const carts = pgTable("carts", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()),
});

export const cartItems = pgTable("cart_items", {
  id: serial("id").primaryKey(),
  cartId: integer("cart_id").notNull().references(() => carts.id, { onDelete: "cascade" }),
  productId: integer("product_id").notNull().references(() => productsTable.productId, { onDelete: "cascade" }), 
  quantity: integer("quantity").notNull().default(1),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()),
});
