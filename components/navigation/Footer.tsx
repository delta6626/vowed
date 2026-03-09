import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="font-body w-full paddingContainer py-4 border-t border-base-300">
      <div className="">
        <Logo className="text-xl" />
        <p className="max-w-40 mt-2 text-accent text-sm">
          The internet never forgets. Neither do we.
        </p>
      </div>

      <div></div>
    </footer>
  );
}
