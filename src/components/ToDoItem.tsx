import React, { Component, CSSProperties } from 'react';

interface TodoItemProps {
    todo: {
        id: number,
        title: string,
        completed: boolean
    };

    markComplete: (id:number) => void;
    deleteTodo: (id: number) => void;
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
                    <button onClick={this.props.deleteTodo.bind(this, id)}
                    style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

const btnStyle: CSSProperties = {
    background: 'green',
    color: 'black',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
