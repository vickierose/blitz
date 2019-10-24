import React, { Component } from 'react';
import Card from '../Card';

import './styles.scss';

class Board extends Component {
  state = {}
  render() {
    return (
      <section className="board">
        {
          this.props.cards
          .sort((a, b) => 0.5 - Math.random())
          .map((card, i) => <Card text={card} key={i}/>)}
      </section>
    );
  }
}

export default Board;