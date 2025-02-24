export interface CarousalData {
    id: number;
    name: string;
    imageName: string;
    description: string;
    price_per_kg: number;
}

export const fertilizers: CarousalData[] = [
    {
        id: 1,
        name: "Urea",
        imageName: "urea.jpg",
        description:
            "High-nitrogen fertilizer ideal for promoting leafy growth in crops like corn and wheat.",
        price_per_kg: 0.35,
    },
    {
        id: 2,
        name: "Potassium Chloride (Muriate of Potash)",
        imageName: "potassium-chloride.jpg",
        description:
            "Essential for root development, fruit formation, and overall plant health.",
        price_per_kg: 0.5,
    },
    {
        id: 3,
        name: "Diammonium Phosphate (DAP)",
        imageName: "dap.jpg",
        description:
            "Balanced nitrogen and phosphorus fertilizer great for seed germination and early plant growth.",
        price_per_kg: 0.45,
    },
    {
        id: 4,
        name: "Calcium Nitrate",
        imageName: "calcium-nitrate.jpg",
        description:
            "Provides calcium and nitrogen, helping prevent blossom end rot in tomatoes and peppers.",
        price_per_kg: 0.65,
    },
    {
        id: 5,
        name: "NPK 15-15-15",
        imageName: "npk-15-15-15.jpg",
        description:
            "Balanced fertilizer with equal parts nitrogen, phosphorus, and potassium for overall plant nutrition.",
        price_per_kg: 0.4,
    },
    {
        id: 6,
        name: "Ammonium Sulfate",
        imageName: "ammonium-sulfate.jpg",
        description:
            "Nitrogen-rich fertilizer that also helps lower soil pH, beneficial for acidic-loving plants.",
        price_per_kg: 0.3,
    },
    {
        id: 7,
        name: "Phosphoric Rock",
        imageName: "phosphoric-rock.jpg",
        description:
            "Natural phosphate source that slowly releases nutrients into the soil.",
        price_per_kg: 0.25,
    },
    {
        id: 8,
        name: "Potassium Sulfate",
        imageName: "potassium-sulfate.jpg",
        description:
            "Chloride-free potassium fertilizer ideal for chloride-sensitive crops like tobacco and fruits.",
        price_per_kg: 0.55,
    },
    {
        id: 9,
        name: "Superphosphate",
        imageName: "superphosphate.jpg",
        description:
            "Concentrated phosphorus fertilizer that enhances root growth and flower/fruit production.",
        price_per_kg: 0.38,
    },
    {
        id: 10,
        name: "Blood Meal",
        imageName: "blood-meal.jpg",
        description:
            "Organic nitrogen-rich fertilizer derived from animal blood, excellent for leafy vegetables.",
        price_per_kg: 0.7,
    },
    {
        id: 11,
        name: "Bone Meal",
        imageName: "bone-meal.jpg",
        description:
            "Organic phosphorus and calcium source that promotes strong root and flower development.",
        price_per_kg: 0.6,
    },
    {
        id: 12,
        name: "Seaweed Extract",
        imageName: "seaweed-extract.jpg",
        description:
            "Organic fertilizer rich in micronutrients and growth hormones, enhancing plant resilience.",
        price_per_kg: 1.2,
    },
    {
        id: 13,
        name: "Zinc Sulfate",
        imageName: "zinc-sulfate.jpg",
        description:
            "Micronutrient fertilizer crucial for enzyme production and overall plant metabolism.",
        price_per_kg: 0.55,
    },
    {
        id: 14,
        name: "Boron Fertilizer",
        imageName: "boron-fertilizer.jpg",
        description:
            "Essential micronutrient that aids in flower and fruit development, particularly in fruit trees.",
        price_per_kg: 0.8,
    },
    {
        id: 15,
        name: "Compost",
        imageName: "compost.jpg",
        description:
            "Organic, nutrient-rich material that improves soil structure and provides slow-release nutrients.",
        price_per_kg: 0.15,
    },
    {
        id: 16,
        name: "Magnesium Sulfate (Epsom Salt)",
        imageName: "epsom-salt.jpg",
        description:
            "Helps improve chlorophyll production and can correct magnesium deficiencies in plants.",
        price_per_kg: 0.45,
    },
    {
        id: 17,
        name: "Copper Sulfate",
        imageName: "copper-sulfate.jpg",
        description:
            "Micronutrient fertilizer that supports plant enzyme systems and chlorophyll formation.",
        price_per_kg: 0.65,
    },
    {
        id: 18,
        name: "Iron Chelate",
        imageName: "iron-chelate.jpg",
        description:
            "Helps prevent and correct iron deficiencies, maintaining healthy green leaf color.",
        price_per_kg: 1.0,
    },
    {
        id: 19,
        name: "Rock Phosphate",
        imageName: "rock-phosphate.jpg",
        description:
            "Natural, slow-release phosphorus source that gradually provides nutrients to plants.",
        price_per_kg: 0.2,
    },
    {
        id: 20,
        name: "Green Sand",
        imageName: "green-sand.jpg",
        description:
            "Mineral-rich fertilizer that provides potassium and trace minerals while improving soil structure.",
        price_per_kg: 0.35,
    },
];
export const seeds: CarousalData[] = [
    {
        id: 1,
        name: "Sunflower Seeds",
        imageName: "sunflower_seeds.jpg",
        description:
            "Rich in nutrients, sunflower seeds are perfect for snacking and baking.",
        price_per_kg: 300,
    },
    {
        id: 2,
        name: "Pumpkin Seeds",
        imageName: "pumpkin_seeds.jpg",
        description:
            "Crunchy and healthy, great for salads or as a standalone snack.",
        price_per_kg: 400,
    },
    {
        id: 1,
        name: "Flax Seeds",
        imageName: "flax_seeds.jpg",
        description:
            "High in omega-3 fatty acids, ideal for smoothies or baking.",
        price_per_kg: 250,
    },
    {
        id: 1,
        name: "Chia Seeds",
        imageName: "chia_seeds.jpg",
        description: "Superfood known for its fiber and protein content.",
        price_per_kg: 700,
    },
    {
        id: 1,
        name: "Sesame Seeds",
        imageName: "sesame_seeds.jpg",
        description: "Versatile seed used in cooking, baking, and garnishing.",
        price_per_kg: 350,
    },
    {
        id: 1,
        name: "Mustard Seeds",
        imageName: "mustard_seeds.jpg",
        description:
            "Adds a flavorful kick to many dishes, widely used in spices.",
        price_per_kg: 200,
    },
    {
        id: 1,
        name: "Coriander Seeds",
        imageName: "coriander_seeds.jpg",
        description:
            "Used in curries and spice blends, offering a citrusy flavor.",
        price_per_kg: 150,
    },
    {
        id: 1,
        name: "Fennel Seeds",
        imageName: "fennel_seeds.jpg",
        description: "Sweet and aromatic, often used in teas and desserts.",
        price_per_kg: 220,
    },
    {
        id: 1,
        name: "Fenugreek Seeds",
        imageName: "fenugreek_seeds.jpg",
        description: "Common in Indian cuisine, known for its health benefits.",
        price_per_kg: 180,
    },
    {
        id: 1,
        name: "Nigella Seeds",
        imageName: "nigella_seeds.jpg",
        description: "Also known as black cumin, used for its earthy flavor.",
        price_per_kg: 260,
    },
    {
        id: 1,
        name: "Caraway Seeds",
        imageName: "caraway_seeds.jpg",
        description:
            "Earthy and nutty, often used in European cuisine and bread.",
        price_per_kg: 240,
    },
    {
        id: 1,
        name: "Cumin Seeds",
        imageName: "cumin_seeds.jpg",
        description:
            "Adds a warm, earthy flavor to dishes, commonly used in curries.",
        price_per_kg: 200,
    },
    {
        id: 1,
        name: "Poppy Seeds",
        imageName: "poppy_seeds.jpg",
        description: "Tiny, nutty seeds often used in baking and desserts.",
        price_per_kg: 450,
    },
    {
        id: 1,
        name: "Hemp Seeds",
        imageName: "hemp_seeds.jpg",
        description:
            "Rich in protein and omega-3, great for smoothies and salads.",
        price_per_kg: 850,
    },
    {
        id: 1,
        name: "Quinoa Seeds",
        imageName: "quinoa_seeds.jpg",
        description: "High-protein seed often used as a grain substitute.",
        price_per_kg: 900,
    },
    {
        id: 1,
        name: "Watermelon Seeds",
        imageName: "watermelon_seeds.jpg",
        description: "Crunchy and nutrient-dense, ideal for snacking.",
        price_per_kg: 300,
    },
    {
        id: 1,
        name: "Basil Seeds",
        imageName: "basil_seeds.jpg",
        description:
            "Also known as sabja, used in drinks and desserts for a cooling effect.",
        price_per_kg: 380,
    },
    {
        id: 1,
        name: "Rye Seeds",
        imageName: "rye_seeds.jpg",
        description:
            "Used in bread and whiskey production, offering a unique flavor.",
        price_per_kg: 280,
    },
    {
        id: 1,
        name: "Amaranth Seeds",
        imageName: "amaranth_seeds.jpg",
        description:
            "Highly nutritious and gluten-free, used in porridges and baking.",
        price_per_kg: 420,
    },
    {
        id: 1,
        name: "Millet Seeds",
        imageName: "millet_seeds.jpg",
        description:
            "Gluten-free and versatile, great for health-conscious recipes.",
        price_per_kg: 150,
    },
];
export const agriculturalMachines: CarousalData[] = [
    {
        id: 1,
        name: "Tractor",
        imageName: "tractor.jpg",
        description:
            "Versatile power unit used for plowing, tilling, planting, and pulling various agricultural implements.",
        price_per_kg: 45000,
    },
    {
        id: 2,
        name: "Combine Harvester",
        imageName: "combine-harvester.jpg",
        description:
            "Advanced machine that cuts, gathers, and threshes grain crops like wheat, corn, and barley in a single pass.",
        price_per_kg: 250000,
    },
    {
        id: 3,
        name: "Seed Drill",
        imageName: "seed-drill.jpg",
        description:
            "Precision planting machine that places seeds at consistent depths and intervals for optimal crop germination.",
        price_per_kg: 35000,
    },
    {
        id: 4,
        name: "Irrigation Pivot System",
        imageName: "irrigation-pivot.jpg",
        description:
            "Automated circular irrigation system that provides uniform water distribution across large crop fields.",
        price_per_kg: 80000,
    },
    {
        id: 5,
        name: "Rotary Tiller",
        imageName: "rotary-tiller.jpg",
        description:
            "Implements that breaks and aerates soil, preparing seedbeds and incorporating organic matter.",
        price_per_kg: 5000,
    },
    {
        id: 6,
        name: "Crop Sprayer",
        imageName: "crop-sprayer.jpg",
        description:
            "Specialized machine for applying pesticides, herbicides, and fertilizers with precision and minimal waste.",
        price_per_kg: 25000,
    },
    {
        id: 7,
        name: "Hay Baler",
        imageName: "hay-baler.jpg",
        description:
            "Machine that compresses and packages cut hay or straw into compact, easily transportable bales.",
        price_per_kg: 30000,
    },
    {
        id: 8,
        name: "Front-end Loader",
        imageName: "front-end-loader.jpg",
        description:
            "Tractor-mounted equipment used for loading, moving, and transferring materials like hay, soil, and fertilizer.",
        price_per_kg: 22000,
    },
    {
        id: 9,
        name: "Potato Harvester",
        imageName: "potato-harvester.jpg",
        description:
            "Specialized machine that digs up, separates, and collects potatoes from the soil with minimal damage.",
        price_per_kg: 65000,
    },
    {
        id: 10,
        name: "Cotton Picker",
        imageName: "cotton-picker.jpg",
        description:
            "Advanced machine that efficiently harvests cotton bolls from plants, separating them from leaves and stems.",
        price_per_kg: 180000,
    },
    {
        id: 11,
        name: "Precision Planter",
        imageName: "precision-planter.jpg",
        description:
            "High-tech seeding machine with GPS and variable rate technology for optimized seed placement.",
        price_per_kg: 55000,
    },
    {
        id: 12,
        name: "Grain Auger",
        imageName: "grain-auger.jpg",
        description:
            "Mechanical conveyor used to transfer grain from combines or trucks to storage bins with minimal grain damage.",
        price_per_kg: 12000,
    },
    {
        id: 13,
        name: "Fertilizer Spreader",
        imageName: "fertilizer-spreader.jpg",
        description:
            "Implements that distribute granular or powdered fertilizers evenly across fields for uniform crop nutrition.",
        price_per_kg: 8000,
    },
    {
        id: 14,
        name: "Sugar Cane Harvester",
        imageName: "sugar-cane-harvester.jpg",
        description:
            "Specialized machine designed to cut, clean, and collect sugar cane stalks efficiently during harvest.",
        price_per_kg: 150000,
    },
    {
        id: 15,
        name: "Vineyard Tractor",
        imageName: "vineyard-tractor.jpg",
        description:
            "Compact tractor designed for narrow rows in vineyards, with specialized attachments for pruning and harvesting.",
        price_per_kg: 40000,
    },
    {
        id: 16,
        name: "Orchard Sprayer",
        imageName: "orchard-sprayer.jpg",
        description:
            "Precision spraying equipment designed for fruit trees, ensuring even chemical distribution with minimal waste.",
        price_per_kg: 18000,
    },
    {
        id: 17,
        name: "GPS Guidance System",
        imageName: "gps-guidance.jpg",
        description:
            "Advanced navigation technology that enables precise field mapping, auto-steering, and data-driven farming.",
        price_per_kg: 15000,
    },
    {
        id: 18,
        name: "Drone for Agriculture",
        imageName: "agricultural-drone.jpg",
        description:
            "Unmanned aerial vehicle for crop monitoring, pest detection, precision spraying, and field mapping.",
        price_per_kg: 10000,
    },
    {
        id: 19,
        name: "Silage Harvester",
        imageName: "silage-harvester.jpg",
        description:
            "Specialized machine for cutting, chopping, and collecting green fodder crops for livestock feed preservation.",
        price_per_kg: 95000,
    },
    {
        id: 20,
        name: "Robotic Milking System",
        imageName: "robotic-milker.jpg",
        description:
            "Automated milking system that allows cows to be milked on-demand with minimal human intervention.",
        price_per_kg: 120000,
    },
];


export const fertilizerimgurl =
    "/img/germinated-seed.jpg";
export const agriculturalMachinesimgurl =
    "/img/Agriculture-Machine.jpg";
export const seedsimgurl =
    "/img/seeds.jpg";
