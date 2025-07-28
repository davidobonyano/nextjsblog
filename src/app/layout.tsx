import "./globals.css"
import Navbar from "@/Components/Navbar"
export const metadata = {
  title: "My Blog",
  description: "Learning Next.js App Router",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
