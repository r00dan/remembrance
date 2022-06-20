'use strict';

/**
 * secure service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::secure.secure');
