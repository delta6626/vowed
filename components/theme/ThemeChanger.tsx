"use client";

import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} className="btn btn-square btn-ghost">
        {!mounted ? (
          <SunMoon size={20} />
        ) : theme === "light" ? (
          <Sun size={20} />
        ) : theme === "dark" ? (
          <Moon size={20} />
        ) : (
          <SunMoon size={20} />
        )}
      </button>

      <ul className="border border-base-300 dropdown-content menu bg-base-200 rounded-box w-40 mt-2">
        <button
          className="btn flex justify-start"
          onClick={() => {
            setTheme("light");
          }}
        >
          <Sun size={20} />
          Light
        </button>

        <button
          className="btn flex justify-start"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <Moon size={20} />
          Dark
        </button>

        <button
          className="btn flex justify-start"
          onClick={() => {
            setTheme("system");
          }}
        >
          <SunMoon size={20} />
          System
        </button>
      </ul>
    </div>
  );
}
