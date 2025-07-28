import Sidebar from "@/Components/Sidebar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
   <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}
