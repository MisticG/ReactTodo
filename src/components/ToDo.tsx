import React from 'react';
import ToDoItem from './ToDoItem';

interface Props {
  todos: {
    id: number,
    title: string,
    completed: boolean
    //[]på slutet betyder att todos läggs till/är en array.
  }[];

  markComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default class ToDo extends React.Component<Props, {}> {
  
  //static propTypes: { todos: PropTypes.Validator<any[]>; }
    
  render() {
    return (
      this.props.todos.map((todo) => (
        <ToDoItem key={todo.id} 
        todo={todo} 
        markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo} />
      ))
    )
  }
}
