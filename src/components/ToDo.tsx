import React from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

interface Props {
  todos: {
    id: number,
    title: string,
    completed: boolean
  }[];

  markComplete: (id: number) => void;
}

export default class ToDo extends React.Component<Props, {}> {
  
  static propTypes: { todos: PropTypes.Validator<any[]>; }
    
  render() {
    return (
        this.props.todos.map((todo) => (
          <ToDoItem key={todo.id} 
          todo={todo} 
          markComplete={this.props.markComplete} />
        ))
    )
  }
}
