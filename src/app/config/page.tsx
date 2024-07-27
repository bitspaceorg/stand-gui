"use client";

import Link from "next/link";
import React from "react";
export default function Developer() {
  return (
    <main className="flex flex-col font-helvetica min-h-screen w-full font-helvetica">
      <section className="w-full h-1/2 p-2">
        <Link
          className="text-black underline font-mono absolute text-left"
          href="/"
        >
          Home
        </Link>
      </section>
      <section className="w-1/2  mt-5">
        <form className="flex flex-col min-h-screen  p-10">
          <h1 className="text-4xl font-bold">Config</h1>
          <section className="flex flex-col mt-5">
            <h2 className="text-2xl font-bold">Project Config</h2>
            <label
              htmlFor="projectName"
              className="block mt-5 text-gray-900 dark:text-white"
            >
              Project Name
              <input
                type="text"
                id="projectName"
                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900  rounded focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="My Project"
                required
              />
            </label>
            <label
              htmlFor="projectHome"
              className="block mt-5 text-gray-900 dark:text-white"
            >
              Project Home
              <input
                type="text"
                id="projectHome"
                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900  rounded focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="/tmp/test/"
                required
              />
            </label>
            <label
              htmlFor="projectLog"
              className="block mt-5 text-gray-900 dark:text-white"
            >
              Project Log
              <input
                type="text"
                id="projectLog"
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="/tmp/testLog/"
                required
              />
            </label>
          </section>
          <section className="flex flex-col mt-5">
            <h2 className="text-2xl font-bold">Requirements Config</h2>
            <label
              htmlFor="requirements"
              className="block mt-5 text-gray-900 dark:text-white"
            >
              <select
                name="requirements"
                id="requirements"
                aria-label="Requirement Name"
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Requirement Name</option>
                <option value="node">node</option>
                <option value="python">python</option>
                <option value="python3">pyhton3</option>
              </select>
            </label>
          </section>
        </form>
      </section>
    </main>
  );
}
