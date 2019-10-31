import React, { Component } from 'react';
import Card from '../Card';
import MainLoader from '../MainLoader';

import './styles.scss';

class Board extends Component {
  state = {}
  render() {
    const { isLoading, cards } = this.props;
    return (
      <section className="board">
        {
          isLoading ?
          <MainLoader /> :
          cards
          .sort((a, b) => 0.5 - Math.random())
          .map((card, i) => <Card text={card} key={i}/>)
        }
      </section>
    );
  }
}

export default Board;