// src/components/CardData.jsx
import React from 'react';
import Card from './Card'; // No curly braces for default export

function CardData() {
  const cardData = [
    {
      imageUrl: "/public/Mask Group.png",
      title: "Dinning",
      description: "",
      buttonText: "Explore More",
    },
    {
      imageUrl: "/public/Image-living room.png",
      title: "Living",
      description: "",
      buttonText: "Explore More",
    },
    {
      imageUrl: "/public/Mask Group (1).png ",
      title: "Bedroom",
      description: "",
      buttonText: "Explore More",
    },
   
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
}

export default CardData;