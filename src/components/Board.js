import React from 'react';
import Card from './Card';
import '../styles/Board.css';

class Board extends React.Component {
  renderCard(i) {
    return (
      <Card 
        value={this.props.cards[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="board">
        {this.props.cards.map((card, i) => this.renderCard(i))}
      </div>
    );
  }
}

export default Board;