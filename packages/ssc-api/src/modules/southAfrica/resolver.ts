module.exports = {
    Query: {
        async dvptCooperationTrend(_root, _args, ctx) {
            return ctx.modules.southAfrica.dvptCooperationTrend();
        },
         async aricfExpBySector(_root, _args, ctx) {
             return ctx.modules.southAfrica.aricfExpBySector();
         },
         async aricfExpByRegion(_root, _args, ctx) {
            return ctx.modules.southAfrica.aricfExpByRegion();
        },
        async govmtdepartment(_root, _args, ctx) {
            return ctx.modules.southAfrica.govmtdepartment();
        }
    }
};
