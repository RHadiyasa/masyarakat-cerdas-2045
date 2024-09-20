"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   // Timer untuk menampilkan button setelah animasi selesai (misalnya 3000ms)
  //   const timer = setTimeout(() => {
  //     setShowButton(true);
  //   }, 4500); // Sesuaikan durasi sesuai kebutuhan

  //   return () => clearTimeout(timer); // Cleanup jika komponen di-unmount
  // }, []);

  const handleExplore = () => {};

  return (
    <div className="grid items-center justify-center min-h-screen">
      <div className="w-full text-center absolute top-10 font-black">
        Thoughtlist.
      </div>
      <div className="w-full text-center absolute bottom-10 font-light text-xs opacity-30">
        Rafi Hadiyasa untuk Masyarakat Cerdas 2045
      </div>
      <div className="flex-col w-full absolute text-center items-center justify-center p-5">
        <div>
          <TypeAnimation
            sequence={[
              "Learning, growing, and empowering through education.",
              1000,
              "We strive to create a brighter future.",
              0,
              () => {
                setShowButton(true);
              },
            ]}
            wrapper="span"
            speed={80}
            style={{
              fontSize: "2em",
              fontWeight: "bold",
            }}
          />
        </div>
      </div>
      {showButton && (
        <Link href={"/main"}>
          <button className="w-full animate-pulse transition-opacity duration-1000 ease-in-out mt-20">
            Explore now!
          </button>
        </Link>
      )}
    </div>
  );
}
