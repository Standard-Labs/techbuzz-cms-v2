'use strict';

/**
 * directory-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::directory-listing.directory-listing');
