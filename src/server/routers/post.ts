import { procedure, router } from "../trpc";
import { z } from "zod";

export const postRouter = router({
  hello: procedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        message: `Hello, ${input.text}!`,
      };
    }),
});