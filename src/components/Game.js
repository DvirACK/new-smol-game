import React, { Component } from 'react';
import Board from './Board';
import shuffle from '../utils/shuffle';

class Game extends Component {
  state = {
    cards: [
      // Define the structure of a card object here
      // For example: { id: 1, image: 'image1.png', isMatched: false, isFlipped: false }
    ],
    score: 0,
    highScore: 0
  };

  componentDidMount() {
    this.startGame();
  }

  startGame = () => {
    let cards = [
      // Add the card objects here
    ];
    cards = shuffle(cards);
    this.setState({ cards });
  };

  handleCardClick = id => {
    let { cards, score, highScore } = this.state;
    const cardIndex = cards.findIndex(card => card.id === id);
    const card = cards[cardIndex];

    if (card.isMatched) {
      this.startGame();
      this.setState({ score: 0 });
    } else {
      card.isFlipped = true;
      cards = cards.map((card, index) => (index === cardIndex ? card : card));
      score++;
      if (score > highScore) {
        highScore = score;
      }
      this.setState({ cards, score, highScore });
    }
  };

  render() {
    const { cards, score, highScore } = this.state;
    return (
      <div>
        <h1>Memory Game</h1>
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
        <Board cards={cards} handleCardClick={this.handleCardClick} />
      </div>
    );
  }
}

export default Game;