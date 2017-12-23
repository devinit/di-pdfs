module.exports = {
    Query: {
        async multiCooperation(_root, _args, ctx) {
            return ctx.modules.india.multiCooperation();
         }
    }
};
