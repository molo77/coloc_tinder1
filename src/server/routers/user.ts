import { procedure, router } from "../trpc";
import { z } from "zod";

export const userRouter = router({
  list: procedure.query(() => {
    return [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
  }),

  create: procedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      return { id: Math.floor(Math.random() * 1000), name: input.name };
    }),
});