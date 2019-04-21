import React, { CSSProperties } from 'react';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle: CSSProperties = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}