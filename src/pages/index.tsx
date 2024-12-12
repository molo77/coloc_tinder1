import dynamic from 'next/dynamic';

const ListingList = dynamic(() => import('../components/ListingList'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Bienvenue sur <span className="text-yellow-300">Coloc Tinder</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Trouvez facilement votre prochain colocataire ou colocation idéale.
          </p>
        </div>
      </header>

      {/* Listings Section */}
      <main className="container mx-auto px-6 md:px-12 py-12">
        <h2 className="text-2xl font-semibold mb-6">Annonces disponibles</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ListingList />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p>&copy; 2024 Coloc Tinder. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}