import React, { ChangeEvent } from 'react';



export default class AddTodo extends React.Component {
    state = {
        title: ''
    }

        //Funktion som uppdaterar state direkt (component level state) då man skriver i inputfältet.
        //Detta sker via ett event (changeEvent)
    onChange = (e: ChangeEvent<HTMLInputElement>) => 
    this.setState({ title: e.target.value });

    render() {
        return (
            <form style={{ display: 'flex' }}> 
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