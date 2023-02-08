import Head from "next/head";
import { Inter } from "@next/font/google";
import { useState } from "react";
import MysteryBox from "../components/MysteryBox";
import Modal from "@/components/Modal";
import useMysterBoxStore from "@/store";
import { v4 as uuidv4 } from "uuid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data: Array<{ id: string; value: number }> = [];
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
    data.push({ id: uuidv4(), value });
  });

  return (
    <>
      <Head>
        <title>Mystery Box</title>
        <meta name="description" content="mystery box prize winner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <div className="border border-emerald-400 h-20 flex items-center justify-center">
          <h1 className="font-bold text-4xl text-emerald-500">7-Eleven</h1>
        </div>
        <div className="border border-red-400 min-h-[calc(100vh_-_80px)] items-center flex justify-center">
          <div className="grid grid-cols-3 justify-center items-center">
            {data.map((d) => {
              return <MysteryBox key={d.id} value={d.value} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
