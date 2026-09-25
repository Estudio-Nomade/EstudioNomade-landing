import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Evita que Turbopack tome el lockfile de ~/Documentos/pnpm-lock.yaml
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
