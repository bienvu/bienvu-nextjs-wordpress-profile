/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.sentius.com.au',
      'upload.wikimedia.org',
      'www.abaxis.com'
      // add as many domains as you need
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-bien.pantheonsite.io",
      },
      {
        protocol: "https",
        hostname: "www.sentiusdigital.com",
      },
      {
        protocol: "https",
        hostname: "www.skillinvest.com.au",
      },
      {
        protocol: "https",
        hostname: "www.varta.org.au",
      },
    ],
  },
};

module.exports = nextConfig;
