import React, {Component, Fragment} from 'react';
import Board from './Board';
import Header from './Header';

import { getLevel } from '../api';
class App extends Component {
  state = {
    isLoading: true,
    level: null,
  }
  handleGettingLevel = (levelNumber) => {
    if(levelNumber && levelNumber > 0) {
      getLevel(levelNumber).then(result => {
        console.log('result', result);
        this.setState({
          level: result,
          isLoading: false,
        })
      })
      .catch(err => console.error('Something is wrong: ', err))
    }
  }
  componentDidMount() {
    this.handleGettingLevel(1);
  }
  render() {
    const { isLoading, level } = this.state;
    const levelName = level && level.title ? level.title : '';
    const levelNumber = level && level.number ? level.number : '';
    const levelItems = level && level.items ? level.items : [];

    return (
      <Fragment>
      <Header levelNumber={levelNumber} levelName={levelName} isLoading={isLoading}/>
      <Board cards={levelItems} isLoading={isLoading}/>
    </Fragment>
    );
  }
}

export default App;
