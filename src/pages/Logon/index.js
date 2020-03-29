import React from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi'

import logo from '../../assets/logo.svg';
import heroesimg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="HeBe The Hero" />
                <form action="#">
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrat</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro!
                    </a>
                </form>
            </section>
            <img src={heroesimg} alt="Heros" />
        </div>
    );
}
