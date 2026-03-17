import Navbar from "@/components/navigation/Navbar";

export default function Loading() {
  return (
    <>
      <Navbar />
      <div className="doublePaddingContainer py-16">
        <div className="skeleton w-full h-20 rounded-2xl"></div>
      </div>
    </>
  );
}
