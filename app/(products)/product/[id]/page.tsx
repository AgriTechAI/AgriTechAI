
import { CarousalData, fertilizers } from "@/const/caraousals";
import styles from "./ProductPage.module.css";
import Image from "next/image";
import AddToCartButton from "@/components/cart/addCart";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;  // Unwrap the Promise

  const product: CarousalData[] = fertilizers.filter((item) => item.id.toString() === id);

  if (!id) {
    return <div>Product not found</div>;
  }

  return (
    <section className="relative h-full w-full pt-44 bg-green-100">
      <div className="flex flex-col items-center justify-center">
        <div className={styles.productPage}>
          <div className={styles.productImage}>
            <Image
              src={`/img/${product[0].imageName}`}
              alt={product[0].name}
              width={500}
              height={500}
            />
          </div>

          <div className={styles.productDetails}>
            <h1 className={styles.productName}>{product[0].name}</h1>
            <h2 className={styles.productTitle}>{product[0].name}</h2>
            <p className={styles.productPrice}>{product[0].price_per_kg}</p>
            <p className={styles.productDescription}>{product[0].description}</p>

            <AddToCartButton product={product[0]} />
          </div>
        </div>
      </div>
    </section>
  );
}
