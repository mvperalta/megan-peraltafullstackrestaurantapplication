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
  // Add the CSP middleware with proper configuration
  {
    name: 'helmet',
    enabled: true,
    config: {
      contentSecurityPolicy: {
        directives: {
          // Update the style-src directive to allow CSS from the specified origin
          'style-src': ["'self'", 'https://meganperalta-fullstackrestaurantapp-kr7t2uvup-mvperalta.vercel.app'],
          // Add any other directives as needed for your application
        },
      },
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
