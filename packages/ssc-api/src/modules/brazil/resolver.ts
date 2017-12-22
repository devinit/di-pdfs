module.exports = {
    Query: {
        async tchCooperationByRegion(_root, _args, ctx) {
            return ctx.modules.brazil.tchCooperationByRegion();
         }
    }
};
