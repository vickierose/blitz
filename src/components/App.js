import React, {Component, Fragment} from 'react';
import Title from './Title';
import Board from './Board';

class App extends Component {
  state = {
    level: {
      title: "Data Types. Operators",
      number: 1,
      items: [
        "What are the data types in JS?",
        "What's the difference between primitive and object types in JS?",
        "How to get data type?",
        "What does Number type include?",
        "NaN == NaN \nNaN === NaN \nObject.is(NaN, NaN)",
        "0/0\n10/0",
        "0.1 + 0.2 === 0.3",
        "+0 === -0\nObject.is(+0, -0)",
        "var str = 'hello'\nstr[0] = 's'\nconsole.log(str)",
        "1 + '2'\nnull + 1\nundefined + 1",
        "How to declare a string?",
        "Methods that modify array?",
        "Methods that don't modify array?",
        "[1, 2, 3, 'hello'].toString()",
        "const obj = {a: 1}\nobj.toString()",
        "How to create completely immutable object?",
        "Type Symbol",
        "Operators' priority",
        "Which operator has the lowest priority?",
        "Difference between var, let and const"
      ]
    },
  }
  render() {
    const { level } = this.state;
    return (
      <Fragment>
      <Title levelNumber={level.number} levelName={level.title}/>
      <Board cards={level.items}/>
    </Fragment>
    );
  }
}

export default App;
