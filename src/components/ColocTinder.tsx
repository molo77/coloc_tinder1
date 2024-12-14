import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { trpc } from '../utils/trpc';

export default function ColocTinder() {
  const { data: users = [], isLoading, error } = trpc.user.list.useQuery();
  const [index, setIndex] = useState(0);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Vérifiez que les utilisateurs sont bien un tableau
  if (!Array.isArray(users) || users.length === 0) {
    return <div>Aucun utilisateur disponible.</div>;
  }

  const currentUser = users[index];

  const handlePass = () => {
    if (index < users.length - 1) {
      setIndex(index + 1);
    } else {
      alert('Plus de colocataires à afficher.');
    }
  };

  const handleLike = () => {
    alert(`Vous avez liké ${currentUser.name}!`);
    handlePass();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {currentUser && (
        <div className="w-80 bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={currentUser.image || '/placeholder.jpg'}
            alt={currentUser.name}
            className="w-40 h-40 mx-auto rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">{currentUser.name}</h2>
          <p>Age: {currentUser.age}</p>
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePass}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Passer
            </button>
            <button
              onClick={handleLike}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Like
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
