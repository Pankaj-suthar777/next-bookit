/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // DB_LOCAL_URL: "mongodb://127.0.0.1/bookit",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "shcjbcha",

    SMTP_HOST: "sandbox.smtp.mailtrap.io",
    SMTP_PORT: 2525,
    SMTP_USER: "fc2fa8293b82ad",
    SMTP_PASSWORD: "634f689de1d8fc",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
    SMTP_FROM_NAME: "BookIt",

    GEOCODER_API: "",
    GEOCODER_PROVIDER: "mapquest",

    MAPBOX_ACCESS_TOKEN: "",

    CLOUDINARY_CLOUD_NAME: "dgkc7j457",
    CLOUDINARY_API_KEY: "378132318969451",
    CLOUDINARY_API_SECRET: "UPmi8Jv49Ezm3v9s9CqMaoEqkZc",
    STRIPE_PUBLISHABLE_KEY:
      "pk_test_51OhvW7Gr7paNn0fxbC8fWbjyifJHhT5vKdT8IR2oz8X8bAbz0oiJaqHMg8B9bUjNaEwBffNgspnjAR0QlISGQPel00EN3uyBLK",
    STRIPE_API_SECRET:
      "sk_test_51OhvW7Gr7paNn0fxvVAsZIGBYQQRTp7jMvPHJ78uiwLtHR7xV0UNXkvMQo96zwBRKeb4FdS7pE9w544PBDXx8B6K00dRx0xf01",
    STRIPE_WEBHOOK_SECRET: "",

    API_URL: "http://localhost:3000",
    DB_LOCAL_URL:
      "mongodb+srv://pankajss0070:c95TzV2zSHCWu6AF@cluster0.b784hfl.mongodb.net/bookNow?retryWrites=true&w=majority",
    DB_URL:
      "mongodb+srv://pankajss0070:c95TzV2zSHCWu6AF@cluster0.b784hfl.mongodb.net/bookNow?retryWrites=true&w=majority",
    REVALIDATE_TOKEN: "JK34J50JSDKFLJSDKF034I5DKFJSDK4IJFKSDJFL",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
