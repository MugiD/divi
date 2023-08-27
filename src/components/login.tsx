"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; //loginpage in future
import { onAuthChanged } from "@/firebase/auth";
import { auth } from "@/firebase/config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

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

  console.log(getAuth().currentUser)

  return loggedIn ? (
    <button onClick={() => SignOut()}>Sign Out</button>
  ) : (
    <button
      onClick={async () => {
        const user = await SignInWithGoogle();
        if (user) {
            router.push("/");
        }
      }}
    >
      Sign In
    </button>
  );
}
