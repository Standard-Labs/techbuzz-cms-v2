'use strict';

/**
 * open-deal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::open-deal.open-deal');
