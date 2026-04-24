import Link from "next/link";
import Logo from "./Logo";
import { Dot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full paddingContainer py-4 border-t border-base-300">
      <div className="">
        <Logo className="text-xl" />
        <p className="text-accent text-sm">Vow it. Mean it. Prove it.</p>
      </div>

      <div className="flex gap-4">
        <Link className="text-sm text-accent" href={"/privacy-policy"}>
          Privacy
        </Link>

        <Dot className="text-accent" size={20} />

        <Link className="text-sm text-accent" href={"/terms-of-service"}>
          Terms
        </Link>

        <Dot className="text-accent" size={20} />

        <Link className="text-sm text-accent" href={"/contact"}>
          Contact
        </Link>
      </div>
    </footer>
  );
}
