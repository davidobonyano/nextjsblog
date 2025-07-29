
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Products</h1>
      <ul className="grid grid-cols-2 gap-4">
        {products.map((product: Product) => (
          <li key={product.id} className="border p-2 rounded">
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
