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
      this.setState({ isLoading: true });

      getLevel(levelNumber).then(result => {
        console.log('result', result);
        if(result) {
          this.setState(state => ({ level: result }))
        }
        this.setState(state => ({ isLoading: false }))
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
    const isFirst = level && level.isFirst ? level.isFirst : false;
    const isLast = level && level.isLast ? level.isLast : false;

    return (
      <Fragment>
      <Header
        levelNumber={levelNumber}
        levelName={levelName}
        isLoading={isLoading}
        isFirst={isFirst}
        isLast={isLast}
        fetchLevel={this.handleGettingLevel}
      />
      <Board cards={levelItems} isLoading={isLoading}/>
    </Fragment>
    );
  }
}

export default App;
