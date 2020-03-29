import React from 'react';
import './styles.css';

import logo from '../../assets/logo.svg';
import heroesimg from '../../assets/heroes.png';

export default function Logon(){
    return (
        <div className="logon-container">
            <session className="form">
                <img src={logo} alt="HeBe The Hero" />
                <form action="#">
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" />
                    <button type="submit">Entrat</button>
                    <a href="/register">
                        Não tenho cadastro!
                    </a>
                </form>
            </session>
            <img src={heroesimg} alt="Heros" />
        </div>
    );
}