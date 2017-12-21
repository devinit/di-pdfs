module.exports = {
    Query: {
        async dvptCooperation(_root, _args, ctx) {
           return ctx.modules.brazil.dvptCooperation();
        },
        async tchCooperationByRegion(_root, _args, ctx) {
            return ctx.modules.brazil.tchCooperationByRegion();
         },
         async topTchRecipients(_root, _args, ctx) {
             return ctx.modules.brazil.topTchRecipients();
         }
    }
};
