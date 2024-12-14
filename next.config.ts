import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Otras configuraciones aquí */
  eslint: {
    ignoreDuringBuilds: true, // Ignora ESLint solo durante el build
  },
};

export default nextConfig;