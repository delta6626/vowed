import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import ThemeChanger from "../theme/ThemeChanger";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className={`flex w-full justify-between py-4 paddingContainer border-b border-base-300`}
    >
      <Logo className="text-3xl" />

      <div className="flex items-center gap-2 w-full justify-end">
        <Show when={"signed-out"}>
          <SignInButton>
            <button className="btn btn-ghost">Sign in</button>
          </SignInButton>
          <SignUpButton>
            <button className="btn btn-primary">Make a vow</button>
          </SignUpButton>
        </Show>

        <Link className="btn btn-primary" href={"/create"}>
          Make a vow
        </Link>
        <Show when={"signed-in"}>
          <UserButton />
        </Show>
      </div>
    </header>
  );
}
