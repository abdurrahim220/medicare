
import { FloatingButtons } from "@/components/shareCompo/FloatingButtons";
import { Sidebar } from "@/components/shareCompo/Sidebar";

export default function Home() {
  return (
    <div className="bg-gray-50 ">
      <div className=" flex items-start">
        <Sidebar />
        <main className="w-full flex-1 p-4 md:p-6">
          {/* Main Content Placeholder - matches the structure of the screenshot */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border min-h-[400px] flex items-center justify-center text-gray-400">
              Main Banner / Content Area
            </div>

            {/* Example Grid for content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow-sm border h-40"
                ></div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <FloatingButtons />
    </div>
  );
}
