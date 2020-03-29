import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiPower } from 'react-icons/fi'

import logo from '../../assets/logo.svg';
import heroesimg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="HeBe The Hero" />
                <span>Bem vinda, APAD</span>
                <Link className="button" to="/incidentes/new">
                    Cadastrar novo caso
                </Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
        </div>
    );
}
