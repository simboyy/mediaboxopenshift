'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: 'materialshop-secret',

  FACEBOOK_ID: '1441636482749627',
  FACEBOOK_SECRET: '9b315f761fba568f437fe167025ea436',

  TWITTER_ID: 'O6bXR91SiDnaBbf42oYYmGLzJ',
  TWITTER_SECRET: '5bgF6QJ8Xic3x2JV4bziPO7KzKY81lfycsrPKItejkPtrM8J4B',

  GOOGLE_ID: 'mediaboxapp',
  GOOGLE_SECRET: 'AIzaSyCMvF-fncbcFW628ZVTKTWqVvifPCqayVs',

  SENDGRID_APIKEY: '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', // Used for sending emails

  PAYPAL_MODE: 'sandbox', //sandbox or live
  PAYPAL_CLIENT_ID: "YOUR_PAYPAL_CLIENT_ID",
  PAYPAL_CLIENT_SECRET: "YOUR_PAYPAL_CLIENT_SECRET",

  STRIPE_APIKEY: 'sk_test_REST_OF_YOUR_KEY',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
//# sourceMappingURL=local.env.js.map
