'use strict';

/**
 * standard-team service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::standard-team.standard-team');
