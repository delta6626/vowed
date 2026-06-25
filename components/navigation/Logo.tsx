import { Show } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  className?: string;
  forFooter?: boolean;
}

export default function Logo({ className, forFooter }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/logo.svg"}
        width={forFooter ? 20 : 30}
        height={forFooter ? 20 : 30}
        alt={"Vowed logo"}
      />
      <Show when={"signed-out"}>
        <Link href={"/"} className={`font-display italic ${className}`}>
          <span className="text-primary">Vowed</span>
        </Link>
      </Show>

      <Show when={"signed-in"}>
        <Link
          href={"/dashboard"}
          className={`font-display italic ${className}`}
        >
          <span className="text-primary">Vowed</span>
        </Link>
      </Show>
    </div>
  );
}
