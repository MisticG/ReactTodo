import React, { ChangeEvent, FormEvent } from 'react';

interface Props {
    addTodo: (title: string) => void;
}

export default class AddTodo extends React.Component<Props, {}> {
    state = {
        title: ''
    }

        //Funktion som uppdaterar state direkt (component level state) då man skriver i inputfältet.
        //Detta sker via ett event (changeEvent)
    onChange = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({ title: e.target.value });
    
    onSubmit = (e: FormEvent) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}> 
                <input
                type="text" 
                name="title" 
                style={{ flex: '10', padding: '5px' }}
                placeholder="Add Todo..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type="submit" 
                value="Submit"
                className="btn"
                style={{flex: '1'}}
                />
            </form>
        )
    }
}