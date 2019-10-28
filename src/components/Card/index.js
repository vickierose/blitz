import React, { Component } from 'react';
import './styles.scss';

class Card extends Component {
  state = {
    isTurned: false
  }

  rotate = () => this.setState({isTurned: true})
  render() {
    return (
      <section
        className={`card-wrap${this.state.isTurned ? ' turned' : ''}`}
        onClick={this.rotate}
      >
        <div className="side front">{
          this.props.text.indexOf('http') === 0 ?
          <a href={this.props.text} target="blank">{this.props.text}</a> :
          this.props.text
        }</div>
        <div className="side back">BLITZ</div>
      </section>
    );
  }
}

export default Card;