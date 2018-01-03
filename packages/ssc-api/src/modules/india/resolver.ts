module.exports = {
    Query: {
        async multiCooperation(_root, _args, ctx) {
            console.log('context: ', ctx);
            return ctx.modules.india.multiCooperation();
         }
    }
};
