import SideSection from "@/components/auth/SideSection";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="w-full flex">
      <SideSection />

      <div className="border-l border-base-300 w-full h-screen flex items-center bg-base-100 justify-center">
        <SignIn />
      </div>
    </div>
  );
}
