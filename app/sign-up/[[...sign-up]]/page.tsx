import SideSection from "@/components/auth/SideSection";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="w-full flex">
      <SideSection />

      <div className="border-l border-base-300 w-full flex items-center bg-base-100 justify-center">
        <SignUp />
      </div>
    </div>
  );
}
