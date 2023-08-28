"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; //loginpage in future
import { onAuthChanged } from "@/firebase/auth";
import { auth } from "@/firebase/config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { BsPersonFill } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";

export function SignInButton() {
  const [SignOut] = useSignOut(auth);
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [SignInWithGoogle, user] = useSignInWithGoogle(auth);

  useEffect(() => {
    onAuthChanged((user) => {
      setLoggedIn(!!user);
    });
  }, []);

  console.log(getAuth().currentUser);

  return loggedIn ? (
    <button
      className="rounded-full p-3 bg-zinc-200 dark:bg-zinc-900"
      onClick={() => router.push("/profile")}
    >
      <BsPersonFill width={16} height={16} />
    </button>
  ) : (
    <button
      className="rounded-full p-3 bg-zinc-200 dark:bg-zinc-900"
      onClick={async () => {
        const user = await SignInWithGoogle();
        if (user) {
          router.push("/");
        }
      }}
    >
      <BiLogInCircle width={16} height={16} />
    </button>
  );
}
