import React, { Component } from 'react';
import { User } from '../App';

interface Props {
    todos: User[]
}

class ToDo extends Component<Props, {}> {
    
  render() {
   return this.props.todos.map((todo) => (
       <h3>{todo.title}</h3>
   ))
  }
}

export default ToDo;
