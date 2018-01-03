module.exports = {
    Query: {
        async overallMultiExpenditure(_root, _args, ctx) {
            return ctx.modules.china.overallMultiExpenditure();
         },
         async flowsByRegion(_root, _args, ctx) {
             return ctx.modules.china.flowsByRegion();
         },
         async flowsBySector(_root, _args, ctx) {
            return ctx.modules.china.flowsBySector();
        },
        async odaRecipients(_root, _args, ctx) {
            return ctx.modules.china.odaRecipients();
        }
    }
};
