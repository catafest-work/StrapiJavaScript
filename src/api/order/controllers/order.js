'use strict';

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// need to add destructure here for {strapi} 
module.exports = createCoreController('api::order.order', ({strapi}) => ({
  confirmOrder: async(ctx, next) => {
     //ctx.body = "ok";
     const {id} = ctx.request.params;
     console.log(id);
  },
  /*find: async (ctx, next) => {
    const (data, met) = await super.find(ctx);
    return
  }*/
}));
