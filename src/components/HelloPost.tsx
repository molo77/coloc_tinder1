import { trpc } from "../utils/trpc";

export default function HelloPost() {
  const { data, isLoading, error } = trpc.post.hello.useQuery({ text: "from tRPC" });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data?.message}</div>;
}