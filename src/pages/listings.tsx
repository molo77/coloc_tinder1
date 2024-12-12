import dynamic from 'next/dynamic';

const ListingList = dynamic(() => import('../components/ListingList'), { ssr: false });

export default function ListingsPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Listings</h1>
      <ListingList />
    </div>
  );
}