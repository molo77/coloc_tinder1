import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const colocataires = [
  { id: 1, name: "Alice", age: 24, description: "Étudiante en design, aime voyager.", image: "/images/alice.jpg" },
  { id: 2, name: "Bob", age: 27, description: "Développeur, fan de jeux vidéo.", image: "/images/bob.jpg" },
  { id: 3, name: "Charlie", age: 22, description: "Passionné de cuisine et de sport.", image: "/images/charlie.jpg" },
];

export default function ColocTinder() {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handlePass(),
    onSwipedRight: () => handleLike(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleLike = () => {
    alert(`Vous avez liké ${colocataires[index].name} !`);
    nextCard();
  };

  const handlePass = () => {
    alert(`Vous avez passé ${colocataires[index].name}.`);
    nextCard();
  };

  const nextCard = () => {
    if (index < colocataires.length - 1) {
      setIndex(index + 1);
    } else {
      alert("Vous avez vu tous les colocataires !");
    }
  };

  const currentColoc = colocataires[index];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {currentColoc ? (
        <div
          {...handlers}
          className="w-80 bg-white rounded-lg shadow-md p-6 text-center"
        >
          <img
            src={currentColoc.image}
            alt={currentColoc.name}
            className="w-40 h-40 mx-auto rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">{currentColoc.name}, {currentColoc.age} ans</h2>
          <p className="text-gray-600">{currentColoc.description}</p>
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
      ) : (
        <h2 className="text-xl font-bold">Plus de colocataires à afficher.</h2>
      )}
    </div>
  );
}