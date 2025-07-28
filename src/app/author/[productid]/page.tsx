import { notFound } from "next/navigation";
import Link from "next/link";
const validIds = ["1", "2", "3", "4", "5"]; // allowed product IDs

type Props = {
  params: {
    productid: string;
  };
};

export default function ProductDetails({ params }: Props) {
  const { productid } = params;

  if (!validIds.includes(productid)) {
    notFound(); //
  }

  return (
    <div>
      <h1>Product Details for {productid}</h1>
      <p>This is the product details page for product {productid}.</p>
      <button><Link href={`/author/${productid}/reviews`}>View Reviews</Link></button>
    </div>
  );
}
