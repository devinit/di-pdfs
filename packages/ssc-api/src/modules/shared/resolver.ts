export default {
    Query: {
        async dvptCooperation(_root, args, ctx) {
           return ctx.modules.shared.dvptCooperation(args.country);
        },
         async topTchRecipients(_root, args, ctx) {
             return ctx.modules.shared.topTchRecipients(args.country);
         }
    }
};
