import Navbar from "@/components/navigation/Navbar";

export default function Loading() {
  return (
    <>
      <Navbar />
      <div className="doublePaddingContainer py-16">
        <div className="skeleton w-full h-20 rounded-2xl"></div>

        <div className="flex gap-4 mt-8">
          <div className="w-60 min-h-28 p-4 rounded-2xl skeleton"></div>
          <div className="w-60 min-h-28 p-4 rounded-2xl skeleton"></div>
          <div className="w-60 min-h-28 p-4 rounded-2xl skeleton"></div>
        </div>
      </div>
    </>
  );
}
