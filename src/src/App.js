import React, { Component } from 'react';
import FormCadastroNota from './components/FormCadastroNota/';
import ListaCategoria from './components/ListaCategoria/';
import NotaCard from './components/Nota/NotaCard/';
import './assets/index.css';
import './assets/standard.css';
import Categoria from './dados/Categoria';
import ArrayNotas from './dados/Notas';

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categoria();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className="content__section">
        <FormCadastroNota
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)} />
        <main>
          <ListaCategoria
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <NotaCard
            deletarNota={this.notas.deletarNota.bind(this.notas)}
            notas={this.notas} />
        </main>
      </section>
    );
  }
}

export default App;
