import React from 'react';

//Injetando propriedades de forma desestruturada
export default function Header({ children }) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

