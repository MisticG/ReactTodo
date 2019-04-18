import React, { Component } from 'react';
import ToDo from './components/ToDo'

export interface User {
  id: number,
  title: string,
  completed: boolean
}

interface State {
  todos: User[]
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
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
  }
  
  render() {
    return (
      <div>
        <ToDo todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
