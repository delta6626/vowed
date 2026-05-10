"use client";

import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun, SunMoon } from "lucide-react";

export default function ThemeChanger() {
  const { setTheme } = useTheme();

  return (
    <div className="dropdown dropdown-hover dropdown-top dropdown-center">
      <button tabIndex={0} className="text-sm text-base-content/60">
        Theme
      </button>

      <ul className="border border-base-300 dropdown-content menu bg-base-200 rounded-box w-40 mt-2">
        <button
          className="btn flex justify-start text-base-content/60"
          onClick={() => {
            setTheme("light");
          }}
        >
          <Sun size={18} />
          Light
        </button>

        <button
          className="btn flex justify-start text-base-content/60"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <Moon size={18} />
          Dark
        </button>

        <button
          className="btn flex justify-start text-base-content/60"
          onClick={() => {
            setTheme("system");
          }}
        >
          <SunMoon size={18} />
          System
        </button>
      </ul>
    </div>
  );
}
