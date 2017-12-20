module.exports = {
    Query: {
        async dvptCooperation(_root, _args, ctx) {
           return ctx.modules.brazil.dvptCooperation();
        }
    }
};
