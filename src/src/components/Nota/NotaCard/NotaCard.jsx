import React, { Component } from 'react';
import NotaContent from '../NotaContent/';
import './style.css';

class NotaCard extends Component {

  constructor(){
    super();
    this.state = {notas:[]};
    this._novasNotas = this._novasNotas.bind(this);
  }

  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas);
  }

  _novasNotas(notas){
    this.setState({...this.notas, notas})
  }

  render() {
    return (
      <div className="nota-card__div">
        <ul className="nota-card">
          {
            this.state.notas.map((nota, index) => {
              return (
                <li className="nota-card__item" key={index}>
                  <NotaContent 
                  indice={index}
                  titulo={nota.titulo} 
                  conteudo={nota.conteudo}
                  categoria={nota.categoria}
                  deletarNota={this.props.deletarNota}
                  />
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
