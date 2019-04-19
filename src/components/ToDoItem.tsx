import React, { Component } from 'react';
import { User } from '../App';

interface Props {
    todo: User
}

export class ToDoItem extends Component<Props,{}> {

    getStyle = () => {
        if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.title}</p>
            </div>

        )
    }
}

const itemStyle ={
    backgroundColor: '#f4f4f4'
}

export default ToDoItem