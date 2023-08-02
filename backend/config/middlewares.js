module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    enabled: true,
    params: {
      origin: ['https://meganperalta-fullstackrestaurantapp-kr7t2uvup-mvperalta.vercel.app'],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
