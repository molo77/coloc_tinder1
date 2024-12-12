import { trpc } from "../utils/trpc";

export default function ListingList() {
  const { data: listings, isLoading, error } = trpc.listing.list.useQuery();

  if (isLoading) return <div>Loading listings...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Available Listings</h2>
      <ul>
        {listings?.map((listing) => (
          <li key={listing.id}>
            <strong>{listing.title}</strong> - {listing.location} - €{listing.price}
          </li>
        ))}
      </ul>
    </div>
  );
}