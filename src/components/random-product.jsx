import { useEffect, useState } from "react";
import ProductCard from "./product-card";

export default function RandomProduct() {
  const [productId, setProductId] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  function randomize() {
    const randomId = Math.floor(Math.random() * 20) + 1;
    setProductId(randomId);
  }

  return (
    <div className="flex flex-col items-center gap-5 p-5">
		<h1>Random Shop</h1>

      {product && (
        <div className="w-full max-w-sm">
          <ProductCard {...product} />
        </div>
      )}

      <button
        onClick={randomize}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg"
      >
        RANDOMIZER
      </button>


    </div>
  );
}