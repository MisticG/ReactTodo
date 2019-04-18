import React, { Component } from 'react';
import Todo from './components/ToDo'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with husband',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todo/>
      </div>
    );
  }
}

export default App;
