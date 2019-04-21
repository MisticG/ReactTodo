import React from 'react';
import './App.css';
import ToDo from './components/ToDo'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'

interface State {
  todos: {
    id: number,
    title: string,
    completed: boolean
    //[]på slutet betyder att todos läggs till/är en array.
  }[];
}

//<{}, State> = Tom props objekt och en State med typningar.
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
    this.setState(
      {todos: this.state.todos.map(todo => {
        if(todo.id === id) {
        todo.completed = !todo.completed;
        }
        return todo;
        }) 
      }
    );
  }

  //filter metod för att filtrer bort de som inte är deletade
  deleteTodo = (id: number) => {
    this.setState({ todos: [...this.state.todos.filter(todo => 
      todo.id !== id)] 
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <AddTodo />
        <ToDo todos={this.state.todos}
        markComplete = {this.markComplete}
        deleteTodo = {this.deleteTodo} />
        </div>
      </div>
    );
  }
}

