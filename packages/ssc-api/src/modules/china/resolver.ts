module.exports = {
    Query: {
        async dvptCooperation(_root, _args, ctx) {
           return ctx.modules.china.dvptCooperation();
        },
        async tchCooperationByRegion(_root, _args, ctx) {
            return ctx.modules.china.tchCooperationByRegion();
         },
         async topTchRecipients(_root, _args, ctx) {
             return ctx.modules.china.topTchRecipients();
         }
    }
};
