import { router } from "../trpc";
import { postRouter } from "./post";
import { userRouter } from "./user";
import { listingRouter } from "./listing";

export const appRouter = router({
  post: postRouter,
  user: userRouter,
  listing: listingRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;