import { procedure, router } from "../trpc";
import { z } from "zod";

export const listingRouter = router({
  list: procedure.query(() => {
    return [
      { id: 1, title: "Spacious apartment", location: "Paris", price: 750 },
      { id: 2, title: "Cozy studio", location: "Lyon", price: 500 },
      { id: 3, title: "Shared house", location: "Marseille", price: 300 },
    ];
  }),

  create: procedure
    .input(z.object({ title: z.string(), location: z.string(), price: z.number() }))
    .mutation(({ input }) => {
      return { id: Math.floor(Math.random() * 1000), ...input };
    }),
});