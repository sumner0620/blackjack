import React, { useState } from "React";

const Deck = () => {
  const deck = {
    spades: [],
    hearts: [],
    clubs: [],
    diamonds: []
  };
  const Card = (suit, value) => {
    this.suit = suit;
    this.value = value;
  };
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
  const fillDeck = () => {
    for (suit in deck) {
      for (value in values) {
        suit.push(new Card(suit, value));
      }
    }
  };
  return fillDeck();
};

export default Deck;
