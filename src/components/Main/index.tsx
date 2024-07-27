import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Metrics } from "@/libs/types";
import { localURL, port } from "@/libs/consts";
export default function Home() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        console.log("localURL", localURL);
        console.log("port", port);
        const response = await axios.get(`${localURL}:${port}/metric`);
        setMetrics(response.data);
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    fetchMetrics();
  }, []);

  if (!metrics) return <div>Loading...</div>;

  const username = localStorage.getItem("username") || "Guest";

  return (
    <main className="flex min-h-screen w-full font-helvetica">
      <section className="flex flex-col w-full items-center p-20">
        <h1 className="text-4xl font-bold">Welcome! {username}</h1>
        <p className="text-xl">
          Let&apos;s get in touch with{" "}
          <span className="font-bold">{metrics.hostname}</span> used by{" "}
          <span className="font-bold">{metrics.username}</span>
        </p>
        <section className="flex flex-col mt-10">
          <h2 className="text-2xl font-bold">System Metrics</h2>
          <ul>
            <li>CPU Count: {metrics.cpuCount}</li>
            <li>OS: {metrics.os}</li>
            <li>
              Memory: {metrics.memory.totalMemory} total,{" "}
              {metrics.memory.usedMemory} used
            </li>
            <li>
              Disk: {metrics.disk.totalDisk} GB total, {metrics.disk.usedDisk}{" "}
              GB used
            </li>
            <li>Uptime: {metrics.upTime}</li>
            <li>Max Procs: {metrics.maxProcs}</li>
          </ul>
        </section>
        <Link
          className="font-helvetica font-medium hover:text-blue-500 mt-5"
          href="/config"
        >
          Configure Project
        </Link>
      </section>
    </main>
  );
}
