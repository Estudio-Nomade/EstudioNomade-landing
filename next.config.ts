import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Evita que Turbopack tome el lockfile de ~/Documentos/pnpm-lock.yaml
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 80, 96, 128, 256],
  },
  // Menos polyfills legacy en browsers modernos
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
