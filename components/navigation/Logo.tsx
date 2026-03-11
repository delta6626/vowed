import Link from "next/link";

export interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href={"/"} className={`font-display ${className}`}>
      <span className="text-primary">Vowed</span>.cc
    </Link>
  );
}
