/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { auth, db } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { BsPlus } from "react-icons/bs";

type Accounts = {
  id: string;
  data: {
    title: string;
    uid: string;
    createdAt: Date;
  };
};

export default function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const [col, setCol] = useState("");
  const colRef = collection(db, "acc-types");
  const [accTypes, setAccTypes] = useState<Accounts[]>([]);
  // const sortedQuery = query(colRef, where("uid", "==", user?.uid));

  // useEffect(() => {
  //   const getCol = async () => {
  //     const docSnap = await getDocs(sortedQuery);
  //     const { col }: any = docSnap.docs.map((doc) => ({
  //       id: doc.id,
  //       data: doc.data(),
  //     }));

  //     setAccTypes(col);
  //   };

  //   getCol();
  // }, [accTypes]);

  const createCollection = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await setDoc(doc(colRef), {
      title: col,
      uid: auth.currentUser?.uid,
      createdAt: new Date(),
    });
    setCol("");
  };

  // { merge: true } //for future

  let avatar: string =
    user?.photoURL ||
    "https://lh3.googleusercontent.com/a/AAcHTtcBvIpfnSIgDOI7TRxxctW065ariJ5XRURsW-ibkYxwibw=s96-c";
  return (
    <>
      <div className="min-h-screen max-w-4xl m-auto flex flex-col items-center">
        <div className="my-10 flex flex-col justify-center items-center">
          <img
            src={avatar}
            alt="user-avatar"
            width={100}
            height={100}
            className="rounded-full border-2 border-blue-400 mb-4"
          />
          <h1 className="font-bold text-xl">{user?.displayName}</h1>
        </div>
        <form onSubmit={createCollection} className="flex items-center">
          <input
            placeholder="New collection"
            onChange={(e) => setCol(e.target.value)}
            value={col}
            className="border-2 border-blue-400 p-4 bg-transparent h-[40px] rounded-full focus:outline-none transition-[1s]"
          />
          <button type="submit" className="rounded-full bg-blue-400 p-2 ml-[-40px] w-[40px] h-[40px] hover:bg-blue-500 transition-[5s] "><BsPlus size={24}/></button>
        </form>
      </div>
    </>
  );
}

{
  /* {accTypes?.map((acc) => (
        <>
          <h1 key={acc.id}>{acc.data.title}</h1>
          <p>Hello</p>
        </>
      ))} */
}
