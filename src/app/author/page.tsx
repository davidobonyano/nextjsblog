import Link from "next/link";

export default function AuthorPage() {
  return (
    <div>
      <h1>Author Page</h1>
      <p>This is the author page.</p>
      <ul>
        <li><Link href="/author/1">Product 1</Link></li>
        <li><Link href="/author/2">Product 2</Link></li>
        <li><Link href="/author/3">Product 3</Link></li>
        <li><Link href="/author/4">Product 4</Link></li>
        <li><Link href="/author/5">Product 5</Link></li>
      </ul>
    </div>
  );
}
