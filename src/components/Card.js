import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

class Card extends React.Component {
  render() {
    const { id, flipped, handleClick, cardContent } = this.props;
    return (
      <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => handleClick(id)}>
        <div className="card-face card-front">
          {cardContent}
        </div>
        <div className="card-face card-back">
          ?
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  cardContent: PropTypes.string.isRequired,
};

export default Card;