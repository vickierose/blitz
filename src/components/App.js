import React, {Fragment} from 'react';
import Title from './Title';
import Board from './Board';

const App = () => {
  return (
    <Fragment>
      <Title levelNumber={1} levelName="Data types"/>
      <Board />
    </Fragment>
  )
}

export default App
