import dynamic from 'next/dynamic';

const ListingList = dynamic(() => import('../components/ListingList'), { ssr: false });

export default function ListingsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Annonces disponibles</h1>
      <ListingList />
    </div>
  );
}
