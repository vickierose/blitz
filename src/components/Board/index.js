import React, { Component } from 'react';
import Card from '../Card';

import './styles.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <section className="board">
        <Card />
        <Card />
      </section>
    );
  }
}

export default Board;