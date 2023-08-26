/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import { auth, provider } from "@/firebase/config.js";
import { signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState(null);

  const SignIn = async () => {
    try {
      await signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
      })
    } catch (error) {
      console.log(error);
    }
  };

  const SignOut = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signinuser) => {
      if (signinuser) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    localStorage.setItem("user", JSON.stringify(user));
    return () => unsubscribe();
  }, []);

  return (
    <>
      <button onClick={SignIn}>SignIn</button>
      {user ? (
        <button onClick={SignOut}>SignOut</button>
      ) : (
        <div>Not signed in</div>
      )}
    </>
  );
}
