/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // DB_LOCAL_URL: "mongodb://127.0.0.1/bookit",
    DB_LOCAL_URL:
      "mongodb+srv://pankajss0070:c95TzV2zSHCWu6AF@cluster0.b784hfl.mongodb.net/bookNow?retryWrites=true&w=majority",
    DB_URL:
      "mongodb+srv://pankajss0070:c95TzV2zSHCWu6AF@cluster0.b784hfl.mongodb.net/bookNow?retryWrites=true&w=majority",
  },
};

export default nextConfig;