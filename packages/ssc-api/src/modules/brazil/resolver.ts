export default {
    Query: {
        async mapData(_root, _args, ctx) {
           return ctx.modules.brazil.dvptCooperation();
        }
    }
};
