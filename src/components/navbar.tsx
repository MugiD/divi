/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import { SignInButton } from "./login";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  const { systemTheme, setTheme } = useTheme();
  const [themeValue, setThemeValue] = useState<any>("");

  useEffect(() => {
    setThemeValue(systemTheme);
  }, []);

  const changeTheme = () => {
    if (themeValue === "dark") {
      setTheme("light");
      setThemeValue("light");
    } else {
      setTheme("dark");
      setThemeValue("dark");
    }
  };

  return (
    <nav className="flex justify-between items-center py-6 px-10 border-b">
      <Link href="/">
        {themeValue === "dark" ? (
          <Image src="dark-logo.svg" width={80} height={80} alt="logo" />
        ) : (
          <Image src="light-logo.svg" width={80} height={80} alt="logo" />
        )}
      </Link>
      <div className="flex justify-between gap-4">
        <SignInButton />
        <button
          onClick={() => changeTheme()}
          className="rounded-full p-3 bg-zinc-200 dark:bg-zinc-900"
        >
          {themeValue === "dark" ? (
            <BsFillSunFill width={16} height={16} />
          ) : (
            <BsFillMoonFill width={16} height={16} />
          )}
        </button>
      </div>
    </nav>
  );
}
