import React from 'react';
import './styles.scss';

const Title = ({levelNumber, levelName}) => (
  <section className="title-wrap">
    <h3>Level {levelNumber}</h3>
    <h2>{levelName}</h2>
  </section>
)

export default Title;
