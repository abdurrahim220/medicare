
import HomeLayout from "@/components/pages/home/Home";
import { FloatingButtons } from "@/components/shareCompo/FloatingButtons";
import { Sidebar } from "@/components/shareCompo/Sidebar";

export default function Home() {
  return (
    <div className="bg-background">
      <div className=" flex items-start">
        <Sidebar />
        <main className="container mx-auto px-2">
          {/* Main Content Placeholder - matches the structure of the screenshot */}
          <div className="">
            <HomeLayout/>
            
          </div>
        </main>
      </div>
      <FloatingButtons />
    </div>
  );
}
