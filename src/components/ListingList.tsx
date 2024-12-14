import { trpc } from '../utils/trpc';

export default function ListingList() {
  const { data: listings = [], isLoading, error } = trpc.listing.list.useQuery();

  console.log('Données des annonces:', listings); // Log des données reçues

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!Array.isArray(listings) || listings.length === 0) {
    return <div>Aucune annonce disponible pour le moment.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Annonces disponibles</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id} className="border p-4 rounded-lg mb-2">
            <h3 className="font-bold">{listing.title}</h3>
            <p>{listing.description}</p>
            <p>Prix : €{listing.price}</p>
            <p>Propriétaire : {listing.owner?.name || 'Inconnu'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
