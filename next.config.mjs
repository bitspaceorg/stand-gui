import dotenv from "dotenv";
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  outDir: "build",
  output: "export",
  env: {
    HTTP_PORT: process.env.HTTP_PORT,
  },
};

export default nextConfig;
