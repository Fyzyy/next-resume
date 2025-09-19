import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  turbo: {
    rules: {
      '*.css': {
        loaders: ['css-loader'],
      },
    },
  },
};

export default nextConfig;
