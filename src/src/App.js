import React, { Component } from 'react';
import FormCadastroNota from './components/FormCadastroNota/';
import NotaCard from './components/Nota/NotaCard/';
import './assets/index.css';
import './assets/standard.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    }
  }

  criarNota = (titulo, conteudo) => {
    const novaNota = {titulo, conteudo};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="content__section">
        <FormCadastroNota criarNota={this.criarNota} />
        <NotaCard notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
