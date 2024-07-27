import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Metrics } from "@/libs/types";
import { baseURL } from "@/libs/consts";
export default function Home() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        console.log("baseURL", baseURL);
        const response = await axios.get(`${baseURL}/metric`);
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
        <p className="text-xl mt-5">
          Let&apos;s get in touch with{" "}
          <span className="font-bold">{metrics.hostname}</span> used by{" "}
          <span className="font-bold">{metrics.username}</span>
        </p>
        <section className="flex flex-col mt-10 w-full items-center">
          <h2 className="text-2xl font-bold">System Metrics</h2>
          <section className="flex flex-row justify-between w-3/4 mt-2">
            <section className="flex flex-col">
              <p>Uptime: {metrics.upTime}</p>
              <p>
                Disk: {metrics.disk.totalDisk} GB total, {metrics.disk.usedDisk}{" "}
                GB used
              </p>
              <p>
                Memory: {metrics.memory.totalMemory} GB total,{" "}
                {metrics.memory.usedMemory} GB used
              </p>
              <p>
                Bytes: {metrics.network.bytesSent} sent,{" "}
                {metrics.network.bytesRecv} recieved
              </p>
            </section>
            <section className="flex flex-col">
              <p>CPU Count: {metrics.cpuCount}</p>
              <p>OS: {metrics.os}</p>
              <p>Max Procs: {metrics.maxProcs}</p>
              <p>
                Packets: {metrics.network.packetsSent} sent,
                {metrics.network.packetsRecv} recieved
              </p>
            </section>
          </section>
        </section>
        <Link
          className=" bg-black text-white p-3  rounded font-helvetica font-medium hover:text-gray-50 mt-5"
          href="/config"
        >
          Configure Project
        </Link>
      </section>
    </main>
  );
}
