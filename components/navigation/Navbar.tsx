import Logo from "./Logo";

export default function Navbar() {
  return (
    <div
      className={`font-body flex w-full justify-between py-4 paddingContainer border-b border-base-300`}
    >
      <Logo />

      <div className="flex">
        <button className="btn btn-ghost">Sign in</button>
        <button className="btn btn-primary">Make a vow</button>
      </div>
    </div>
  );
}
