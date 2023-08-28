"use client";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const mon = Montserrat({
  display: "swap",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <motion.div
        className="mt-24 py-6 min-h-screen flex flex-col justify-center items-center"
        id="about"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className={`${mon.className} text-8xl tracking-[20px] font-extrabold  bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text animate-gradient`}
        >
          DIVI
        </h1>
        <p className={`${mon.className} sm:text-2xl text-xl font-normal mt-4`}>
          Save instagram accounts in one place
        </p>
      </motion.div>
    </>
  );
}
