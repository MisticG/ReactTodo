import React, { Component } from 'react';

interface TodoItemProps {
    todo: {
        id: number,
        title: string,
        completed: boolean
    };

    markComplete: (id:number) => void;
}

export default class ToDoItem extends Component<TodoItemProps,{}> {

    //static propTypes: { todo: PropTypes.Validator<object>; };

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 
            'none'
        }
    }

    render() {

        //destructuring props
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" 
                    onChange={this.props.markComplete.bind
                    (this, id)} /> {' '}
                    { title }
                </p>
            </div>
        )
    }
}
