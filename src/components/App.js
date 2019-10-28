import React, {Component, Fragment} from 'react';
import Title from './Title';
import Board from './Board';

class App extends Component {
  state = {
    level1: {
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
    level2: {
      title: "Statements and Syntax. Functions and Scope",
      number: 2,
      items: [
        "Object.is(+0, -0)\nObject.is(NaN, NaN)",
        "[1, 2, 3, 'hello'].toString()",
        "Type Symbol",
        "when should we use if, ? : , switch case?",
        "What will happen?\nlet i = 0;\nwhile (i < 3) {\nalert( i );}",
        "Is there any difference:\nfor (let i = 0; i < 3; i++) {alert(i)}\nfor (let i = 0; i < 3; ++i) {alert(i)}",
        "break and continue in loops",
        "Can we use break and continue with ternar operator? What will happen if we do?",
        "Types of functions aka Possible ways of declaring a function",
        "Key features of arrow functions",
        "How to iterate through object properties?",
        "https://gist.github.com/vickierose/15fa7ff3aca1b7ffa9ed1cc8b9471dfd",
        "For what do we need call and apply?",
        "What is a function scope?",
        "What is closure?",
        "https://gist.github.com/vickierose/90b69cb1c192a9e12d213279d5500d1b"
      ]
    }
  }
  render() {
    const { level2 } = this.state;
    return (
      <Fragment>
      <Title levelNumber={level2.number} levelName={level2.title}/>
      <Board cards={level2.items}/>
    </Fragment>
    );
  }
}

export default App;
