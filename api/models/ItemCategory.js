/**
 * ItemCategory.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'item_categories',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    'name': {
      type: 'string'
    },
    'status': {
      type: 'integer',
      defaultsTo:0
    }
  }
};

