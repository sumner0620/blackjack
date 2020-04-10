import React, { useState } from "React";

const Card = props => {
  const values = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    jack: 10,
    queen: 10,
    king: 10,
    ace: [1, 11]
  };
  const cardValue = useState(props.card);
  const suit = useState(props.suit);
  return (
    <div className="card" ref={values[cardValue]}>
      <span className={suit}>{suit}</span>
      <figure className={card}>{card}</figure>
      <span className={suit}>{suit}</span>
    </div>
  );
};

export default Card;
