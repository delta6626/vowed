import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import ThemeChanger from "../theme/ThemeChanger";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header
      className={`flex w-full justify-between py-4 paddingContainer border-b border-base-300`}
    >
      <Logo className="text-3xl" />

      <div className="flex">
        <Show when={"signed-out"}>
          <SignInButton>
            <button className="btn btn-ghost">Sign in</button>
          </SignInButton>
          <SignUpButton>
            <button className="btn btn-primary">Make a vow</button>
          </SignUpButton>
        </Show>
        <ThemeChanger />
      </div>
    </header>
  );
}
