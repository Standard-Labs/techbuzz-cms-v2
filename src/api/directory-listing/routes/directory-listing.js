'use strict';

/**
 * directory-listing router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::directory-listing.directory-listing');
