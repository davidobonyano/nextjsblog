import { reviews } from "@/data/reviews";
import { notFound } from "next/navigation";

type Props = {
  params: { productid: string; reviewid: string };
};

export default function ReviewDetails({ params }: Props) {
  const review = reviews.find(
    (r) => r.id === params.reviewid && r.productId === params.productid
  );

  if (!review) notFound();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">{review.title}</h1>
      <p>{review.content}</p>
    </div>
  );
}
