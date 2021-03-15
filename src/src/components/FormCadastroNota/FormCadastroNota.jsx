import React, { Component } from 'react';
import './style.css';
import Logo from './logo.svg';

class FormCadastroNota extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.conteudo = "";
  }

  _handleMudarTitulo = (event) => {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaConteudo = (event) => {
    event.stopPropagation();
    this.conteudo = event.target.value;
  }

  _criarNota = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.conteudo);

    const inputTitulo = document.getElementById('input-title');
    const inputConteudo = document.getElementById('input-content');

    inputTitulo.value = '';
    inputConteudo.value = '';
    inputTitulo.focus();
  }

  render() {
    return (
      <section className="section-cadastro-nota">
        <div className="section-cadastro-nota_header">
          <img className="section-cadastro-nota__img" src={Logo} alt="Logo React Notes" />
          <h1 className="section-cadastro-nota__h1">React Notes</h1>
        </div>
        <form className="form-cadastro-nota__form"
          onSubmit={this._criarNota}
        >
          <label htmlFor="input-title" className="form-cadastro-nota__label"> Título </label>
          <input
            id="input-title"
            className="form-cadastro-nota__input"
            type="text"
            placeholder="Insira o título da nota"
            onChange={this._handleMudarTitulo}
            required
          />
          <label htmlFor="input-content" className="form-cadastro-nota__label"> Conteúdo </label>
          <textarea
            id="input-content"
            className="form-cadastro-nota__textarea"
            placeholder="Digite o conteúdo da nota"
            rows={10}
            onChange={this._handleMudancaConteudo}
            required
          />
          <button className="form-cadastro-nota__button" type="submit">
            Criar Nota
          </button>
        </form>
      </section>
    );
  }
}

export default FormCadastroNota;
