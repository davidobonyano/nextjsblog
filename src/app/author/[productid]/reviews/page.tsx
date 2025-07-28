import { reviews } from "@/data/reviews";

type Props = {
  params: { productid: string };
};

export default function ReviewsPage({ params }: Props) {
  const productReviews = reviews.filter(
    (review) => review.productId === params.productid
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">
        Reviews for Product {params.productid}
      </h1>

      {productReviews.length === 0 ? (
        <p>No reviews yet for this product.</p>
      ) : (
        <ul className="space-y-2">
          {productReviews.map((review) => (
            <li key={review.id}>
              <a
                href={`/author/${params.productid}/reviews/${review.id}`}
                className="text-blue-600 underline"
              >
                {review.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
