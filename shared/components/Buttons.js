import React from 'react';

export default function Buttons({ children, onClick }) {
    return (
        <button onClick={onClick} style={{ padding: '10px 20px', margin: '10px', cursor: 'pointer' }}>
            {children}
        </button>
    );
}

