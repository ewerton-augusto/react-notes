import React, { Component } from 'react';
import NotaContent from '../NotaContent/';
import './style.css';

class NotaCard extends Component {
  render() {
    return (
      <div className="nota-card__div">
        <h1 className="nota-card__title">Lista de Notas:</h1>
        <ul className="nota-card">
          {
            this.props.notas.map((nota, index) => {
              return (
                <li className="nota-card__item" key={index}>
                  <NotaContent titulo={nota.titulo} conteudo={nota.conteudo} />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default NotaCard;
