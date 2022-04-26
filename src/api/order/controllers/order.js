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
     const order = await strapi.entityService.findOne("api::order.order", id);
     await strapi.entityService.update("api::order",
     {
       id, 
       data: {
         confirmed: true,
         date_confirmed: new Data(),
         
       },
     });
     // send an email after confirmation
     return 
     {
       message: "confirmed";
     };
     //id; // this will be used on postman to see how this send data request
  },
  /*find: async (ctx, next) => {
    const (data, met) = await super.find(ctx);
    return
  }*/
  create: async (ctx, next) => {
    const user = ctx.state.user;
    const {data, meta} = this.create(ctx);
    data.user = user;
    return {data, meta}
  }
}));
