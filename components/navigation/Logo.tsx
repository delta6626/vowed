import { Show } from "@clerk/nextjs";
import Link from "next/link";

export interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <>
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
    </>
  );
}
