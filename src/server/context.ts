import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

// Context for tRPC
export function createContext({ req, res }: CreateNextContextOptions) {
  return {};
}

export type Context = ReturnType<typeof createContext>;