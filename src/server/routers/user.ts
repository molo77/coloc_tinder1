export const userRouter = router({
  list: procedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany();
    console.log('Users:', users); // Log pour vérifier les données
    return users;
  }),
});
