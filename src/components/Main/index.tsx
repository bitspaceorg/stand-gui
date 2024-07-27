import React from "react";
import Link from "next/link";
export default function Home() {
  const username = localStorage.getItem("username");
  const servername = "Chris Evans";
  return (
    <main className="flex min-h-screen w-full font-helvetica">
      <section className="flex flex-col w-full items-center p-20">
        <h1 className="text-4xl font-bold">Welcome! {username}</h1>
        <p className="text-xl"> Let's get in touch with {servername} </p>
        <Link
          className="font-helvetica font-medium hover:text-yellow-50"
          href="/config"
        >
          Configure Project
        </Link>
      </section>
    </main>
  );
}
