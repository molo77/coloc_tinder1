export const listingRouter = router({
  list: procedure.query(async ({ ctx }) => {
    const listings = await ctx.prisma.listing.findMany({
      include: { owner: true },
    });
    console.log('Listings:', listings); // Log pour vérifier les données
    return listings;
  }),
});
