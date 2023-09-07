'use strict';

/**
 * fulfillment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fulfillment.fulfillment');
