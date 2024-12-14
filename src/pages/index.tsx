import dynamic from 'next/dynamic';

const ListingList = dynamic(() => import('../components/ListingList'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Bienvenue sur Coloc Tinder</h1>
          <p className="mt-4">Trouvez votre prochain colocataire ou colocation idéale.</p>
        </div>
      </header>
      <main className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-6">Annonces disponibles</h2>
        <ListingList />
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Coloc Tinder. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
