// CardList.jsx
import Card from "./Card.jsx"; // Assuming Card.js is in the same directory
import cardData from "./CardData.js";

const CardList = ({ selectedCardIds }) => {
    const selectedCards = cardData.filter((card) => selectedCardIds.includes(card.id));
  
    if (!selectedCards.length) {
      return <p>No cards found</p>;
    }
  
    return (
      <div className="card-list">
        {selectedCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    );
  };

export default CardList;
