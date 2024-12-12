import dynamic from 'next/dynamic';

const UserList = dynamic(() => import('../components/UserList'), { ssr: false });

export default function UsersPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Users</h1>
      <UserList />
    </div>
  );
}