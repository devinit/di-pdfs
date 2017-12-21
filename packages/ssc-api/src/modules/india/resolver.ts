module.exports = {
    Query: {
        async dvptCooperation(_root, _args, ctx) {
           return ctx.modules.india.dvptCooperation();
        },
        async multiCooperation(_root, _args, ctx) {
            return ctx.modules.india.multiCooperation();
         },
         async topTchRecipients(_root, _args, ctx) {
             return ctx.modules.india.topTchRecipients();
         }
    }
};
