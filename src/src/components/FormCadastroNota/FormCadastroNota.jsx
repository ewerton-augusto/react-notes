import React, { Component } from 'react';
import './style.css';
import Logo from '../../assets/img/logo.svg';

class FormCadastroNota extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.conteudo = "";
    this.state = {categorias:[]};
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  
  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias){
    this.setState({...this.categorias, categorias});
  }

  _handleCategoria = (event) => {
    event.stopPropagation();
    this.categoria = event.target.value;
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

    this.props.criarNota(this.titulo, this.conteudo, this.categoria);

    const inputTitulo = document.getElementById('input-title');
    const inputConteudo = document.getElementById('input-content');

    inputTitulo.value = '';
    inputConteudo.value = '';
    inputTitulo.focus();
  }

  render() {
    return (
      <section className="cadastro-nota">
        <div className="cadastro-nota_header">
          <img className="cadastro-nota__img" src={Logo} alt="Logo React Notes" />
          <h1 className="cadastro-nota__h1">React Notes</h1>
        </div>
        <form className="form-cadastro-nota__form"
          onSubmit={this._criarNota}
        > 
          <label htmlFor="input-category" className="form-cadastro-nota__label"> Categoria </label>
          <select 
          id="input-category" 
          className="form-cadastro-nota__input"
          onChange={this._handleCategoria}>
            <option>Sem Categoria</option>
            {this.state.categorias.map((categoria, index) => {
              return <option key={index}>{categoria}</option>
            })}
          </select>
          <label htmlFor="input-title" className="form-cadastro-nota__label"> T??tulo </label>
          <input
            id="input-title"
            className="form-cadastro-nota__input"
            type="text"
            placeholder="Insira o t??tulo da nota"
            onChange={this._handleMudarTitulo}
            required
          />
          <label htmlFor="input-content" className="form-cadastro-nota__label"> Conte??do </label>
          <textarea
            id="input-content"
            className="form-cadastro-nota__textarea"
            placeholder="Digite o conte??do da nota"
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
