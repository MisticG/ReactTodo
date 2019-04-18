import React, { Component } from 'react';
import { User } from '../App';

interface Props {
    todos: User[]
}

class ToDo extends Component<Props, {}> {

  private get todoList() {
    const todoes = this.props.todos.map((todo) =>{
      return (
        <li key={todo.id}>
            <h3>{todo.title}</h3>
        </li>
      )    
    })
    return todoes
  }
    
  render() {
    return (
      <ul>
        {this.todoList}
      </ul>
    )
  }
}

export default ToDo;
