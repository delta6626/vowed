import Link from "next/link";
import Logo from "./Logo";
import { Dot } from "lucide-react";
import ThemeChanger from "../theme/ThemeChanger";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between w-full paddingContainer py-4 border-t border-base-300">
      <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
        <Logo className="text-xl" />
        <p className="text-base-content/60 text-sm">
          Vow it. Mean it. Prove it.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <ThemeChanger />

        <Dot className="hidden xs:block text-base-content/60" size={20} />

        <Link className="text-sm text-base-content/60" href={"/privacy-policy"}>
          Privacy
        </Link>

        <Dot className="hidden xs:block text-base-content/60" size={20} />

        <Link
          className="text-sm text-base-content/60"
          href={"/terms-of-service"}
        >
          Terms
        </Link>

        <Dot className="hidden xs:block text-base-content/60" size={20} />

        <Link className="text-sm text-base-content/60" href={"/contact"}>
          Contact
        </Link>
      </div>
    </footer>
  );
}
