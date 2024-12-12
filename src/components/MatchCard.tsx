import { FC } from "react";

interface MatchProps {
  listingTitle: string;
  matchedUser: string;
}

const MatchCard: FC<MatchProps> = ({ listingTitle, matchedUser }) => {
  return (
    <div className="border p-4 rounded shadow bg-green-100">
      <h2>Match Found!</h2>
      <p>Listing: {listingTitle}</p>
      <p>Matched with: {matchedUser}</p>
    </div>
  );
};

export default MatchCard;