'use strict';

/**
 *  secure controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::secure.secure');
