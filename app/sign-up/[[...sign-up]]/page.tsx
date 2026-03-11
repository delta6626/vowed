import SideSection from "@/components/auth/SideSection";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="w-full flex">
      <SideSection />

      <div className="w-full flex items-center bg-base-200 justify-center">
        <SignUp />
      </div>
    </div>
  );
}
