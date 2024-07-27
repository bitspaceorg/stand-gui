"use client";

import Link from "next/link";
import React from "react";
export default function Developer() {
  return (
    <main className="flex flex-col min-h-screen w-full font-helvetica">
      <section className="w-full h-1/2 p-2">
        <Link
          className="text-black underline font-mono absolute text-left"
          href="/"
        >
          Home
        </Link>
      </section>
      <section className="flex flex-col  w-1/2 border-2">
        <form className="border-gray-300 border-2 p-10">
          <label htmlFor="project">Project Name</label>
          <input
            className="border-2 border-gray-300 w-full h-10 rounded"
            type="text"
            id="project"
            name="project"
            required
          />
        </form>
      </section>
    </main>
  );
}
