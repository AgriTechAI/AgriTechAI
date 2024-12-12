import { CarousalData, fertilizers } from "@/const/caraousals";
import styles from "./ProductPage.module.css";
import Image from "next/image";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await the `params` promise to retrieve `id`

  if (!id) {
    return <div>Product not found</div>;
  }

  const product: CarousalData[] = fertilizers.filter((item) => item.id.toString() === id )

  // Determine the class name based on `id`
  return (
    <section className="relative h-full w-full pt-44 bg-green-100">
      <div className="flex flex-col items-center justify-center">
        <div className={styles.productPage}>
          {/* Product Image */}
          <div className={styles.productImage}>
            <Image
              src={product[0].imageName}
              alt={product[0].name}
              width={500} // Adjust dimensions as needed
              height={500}
            />
          </div>

          {/* Product Details */}
          <div className={styles.productDetails}>
            <h1 className={styles.productName}>{product[0].name}</h1>
            <h2 className={styles.productTitle}>{product[0].name}</h2>
            <p className={styles.productPrice}>{product[0].price_per_kg}</p>
            <p className={styles.productDescription}>{product[0].description}</p>

            <button className={styles.buyButton}>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
