module.exports = {
    Query: {
        async dvptCooperation(_root, _args, ctx) {
           return ctx.modules.china.dvptCooperation();
        },
        async overallMultiExpenditure(_root, _args, ctx) {
            return ctx.modules.china.overallMultiExpenditure();
         },
         async odaLikeFlowsByRegion(_root, _args, ctx) {
             return ctx.modules.china.odaLikeFlowsByRegion();
         },
         async odaLikeFlowsBySector(_root, _args, ctx) {
            return ctx.modules.china.odaLikeFlowsByRegion();
        },
        async odaRecipients(_root, _args, ctx) {
            return ctx.modules.china.odaLikeFlowsByRegion();
        }
    }
};
