export interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <h1 className={`font-display ${className}`}>
      <span className="text-primary">Vowed</span>.cc
    </h1>
  );
}
