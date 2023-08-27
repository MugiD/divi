"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, setDoc } from "firebase/firestore";

export default function Profile() {
  const [user] = useAuthState(auth);
  const [col, setCol] = useState("");
  const colRef = collection(db, "acc-types");

  const createCollection = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    await setDoc(doc(colRef), {
      title: col,
      uid: auth.currentUser?.uid,
      createdAt: new Date(),
    });
    setCol("");
  };

  // { merge: true } //for future

  return (
    <>
      <h1>hello</h1>
      <h1>{user?.displayName}</h1>
      <form onSubmit={createCollection}>
        <input
          placeholder="Your collection"
          onChange={(e) => setCol(e.target.value)}
          value={col}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
}
