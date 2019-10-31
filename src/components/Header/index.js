import React, { Component } from 'react';
import Title from '../Title'

import './styles.scss';

class Header extends Component {
  state = {  }
  navigateToLevel = () => {}
  render() {
    const { levelNumber, levelName } = this.props;
    return (
      <section className="header-wrap">
        <button className="nav-btn nav-btn-back" onClick={() => this.navigateToLevel()}>&#8668;</button>
        <Title levelNumber={levelNumber} levelName={levelName} />
        <button className="nav-btn nav-btn-forward" onClick={() => this.navigateToLevel()}>&#8669;</button>
      </section>
    );
  }
}

export default Header;