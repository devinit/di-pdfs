module.exports = {
    Query: {
        async tchCooperation(_root, _args, ctx) {
           return ctx.modules.brazil.tchCooperation();
        }
    }
};
