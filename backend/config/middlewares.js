module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    enabled: true,
    // Here you can configure CORS options
    allowedOrigins: ['https://megan-peraltafullstackrestaurantapplication.vercel.app'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    // ...
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
