import React, { Component } from 'react';
import { User } from '../App';
import ToDoItem from './ToDoItem';

interface Props {
  todos: User[]
}

class ToDo extends Component<Props, {}> {

  private get todoList() {
    const todoes = this.props.todos.map((todo) =>{
      return (
        <ToDoItem key={todo.id} 
        todo={todo}
        />
      )    
    })
    return todoes
  }
    
  render() {
    return (
        <h2>{this.todoList}</h2>
    )
  }
}

export default ToDo;
