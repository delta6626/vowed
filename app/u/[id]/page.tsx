import Navbar from "@/components/navigation/Navbar";

export const UserProfile = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden">
      <div className="flex flex-col flex-1">
        <Navbar />
      </div>

      <div className="w-full h-full doublePaddingContainer mt-16"></div>
    </div>
  );
};
