module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "strapi-drr3.onrender.com", "myrestaurantimagesbucket.s3.amazonaws.com"],
    loader: "default",
    path: "/_next/image",
    disableStaticImages: true,
    deviceSizes: [320, 420, 768, 1024, 1200], // Modify these sizes according to your requirements
  },
};
