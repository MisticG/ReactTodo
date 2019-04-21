import React from 'react';
import './App.css';
import ToDo from './components/ToDo'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid';

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
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with husband',
        completed: false
      },
      {
        id: uuid.v4(),
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

  addTodo = (title: string) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <ToDo todos={this.state.todos}
        markComplete = {this.markComplete}
        deleteTodo = {this.deleteTodo} />
        </div>
      </div>
    );
  }
}

