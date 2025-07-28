 import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-white border-r p-4 space-y-4">
      <h2 className="text-lg font-semibold">Blog</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/blog" className="text-blue-700 hover:underline">Overview</Link>
        </li>
        <li>
          <Link href="/blog/settings" className="text-blue-700 hover:underline">Settings</Link>
        </li>
      </ul>
    </aside>
  );
}
