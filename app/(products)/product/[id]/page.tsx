import { fertilizerimgurl } from "@/const/caraousals";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Await the `params` promise to retrieve `id`

  if (!id) {
    return <div>Product not found</div>;
  }

  const product = {
    name: "Organic Fertilizer",
    price: "$25.00",
    title: "Premium Organic Fertilizer",
    description:
      "Boost your crop yield with our 100% organic fertilizer, rich in nutrients to support healthy soil and vibrant plants.",
    image: {fertilizerimgurl}, // Place the image in the public folder
    details: [
      "100% organic ingredients",
      "Improves soil health",
      "Suitable for all crops",
      "Net weight: 5kg",
    ],
  };

  // Determine the class name based on `id`
  const containerClass =
    id === '1'
      ? 'h-screen flex flex-col items-center justify-center bg-blue-500'
      : 'h-screen flex flex-col items-center justify-center bg-red-500';

      return (
        <div className={styles.productPage}>
          {/* Product Image */}
          <div className={styles.productImage}>
            <Image
              src={product.image}
              alt={product.name}
              width={500} // Adjust dimensions as needed
              height={500}
            />
          </div>
    
          {/* Product Details */}
          <div className={styles.productDetails}>
            <h1 className={styles.productName}>{product.name}</h1>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productPrice}>{product.price}</p>
            <p className={styles.productDescription}>{product.description}</p>
    
            <ul className={styles.productDetailsList}>
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
    
            <button className={styles.buyButton}>Add to Cart</button>
          </div>
        </div>
      );
}
