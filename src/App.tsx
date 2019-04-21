import React from 'react';
import './App.css';
import ToDo from './components/ToDo'

interface State {
  todos: {
    id: number,
    title: string,
    completed: boolean
  }[];
}

export default class App extends React.Component<{}, State> {
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


  markComplete = (id: number) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  }) });
  
  }
  
  render() {
    return (
      <div className="App">
        <ToDo todos={this.state.todos}
        markComplete = {this.markComplete}
        />
      </div>
    );
  }
}

