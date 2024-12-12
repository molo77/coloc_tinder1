import { procedure, router } from "../trpc";
import { z } from "zod";

export const exampleRouter = router({
  hello: procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input.name}!`,
      };
    }),
});