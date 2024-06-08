/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  transpilePackages: ["@package/bug"],
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },

  webpack: (config) => {
    Object.assign(config.resolve.alias, {
      "@mongodb-js/zstd": false,
      "@aws-sdk/credential-providers": false,
      snappy: false,
      aws4: false,
      "mongodb-client-encryption": false,
      kerberos: false,
      "supports-color": false,
      "bson-ext": false,
    });
    config.ignoreWarnings = [
      { module: /node_modules\/node-fetch\/lib\/index\.js/ },
      { file: /node_modules\/node-fetch\/lib\/index\.js/ },
    ];
    return config;
  },
  reactStrictMode: process.env.NODE_ENV === "development" ? false : true,
};

module.exports = nextConfig;
