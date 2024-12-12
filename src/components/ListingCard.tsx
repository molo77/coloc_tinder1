import { FC } from "react";

interface ListingProps {
  title: string;
  description: string;
  location: string;
  price: number;
}

const ListingCard: FC<ListingProps> = ({ title, description, location, price }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{location}</p>
      <p>{price} €</p>
    </div>
  );
};

export default ListingCard;