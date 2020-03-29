import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logo from '../../assets/logo.svg';

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

            <h1>Casos Cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>
                    
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>

                </li>
            
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>
                     
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
           
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>
                     
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>
                     
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>                     
                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}
