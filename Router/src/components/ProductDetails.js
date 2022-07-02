import { useParams } from "react-router-dom";
export const ProductDetails = function () {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productName}</p>
    </section>
  );
};
