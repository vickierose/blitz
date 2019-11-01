import React, { Component } from 'react';
import Title from '../Title'

import './styles.scss';

class Header extends Component {
  state = {  }
  navigateToLevel = number => {
    const {fetchLevel} = this.props;
    fetchLevel(number);
  }
  render() {
    const {
      levelNumber,
      levelName,
      isFirst,
      isLast,
      isLoading
    } = this.props;

    return (
      <section className="header-wrap">
        <button
          className="nav-btn nav-btn-back"
          onClick={() => this.navigateToLevel(+levelNumber - 1)}
          disabled={isLoading || isFirst}
        >
          &#8668;
        </button>
        <Title levelNumber={levelNumber} levelName={levelName} />
        <button
          className="nav-btn nav-btn-forward"
          onClick={() => this.navigateToLevel(+levelNumber + 1)}
          disabled={isLoading || isLast}
        >
          &#8669;
        </button>
      </section>
    );
  }
}

export default Header;