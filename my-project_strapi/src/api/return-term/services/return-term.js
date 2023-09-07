'use strict';

/**
 * return-term service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::return-term.return-term');
