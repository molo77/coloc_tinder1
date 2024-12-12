import { trpc } from "../utils/trpc";

export default function UserList() {
  const { data: users, isLoading, error } = trpc.user.list.useQuery();

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}