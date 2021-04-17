import React, { Component } from 'react';
import './style.css';

class ListaCategoria extends Component {

    constructor(){
        super();
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
        this.setState({...this.state, categorias})
    }
    
    _handlerAdicionaCategoria = (e) => {
        if(e.key === "Enter"){
            const nomeCategoria = e.target.value;
            this.props.adicionarCategoria(nomeCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categoria">
                <ul className="lista-categoria__ul">
                    {
                        this.state.categorias.map((categoria, index) =>{
                            return <li key={index}>{categoria}</li>
                        })
                    }
                </ul>
                <label className="lista-categoria__label" htmlFor="input-categoria"> Categoria: </label>
                <input 
                className="lista-categoria__input"
                type="text"  
                id="input-categoria" 
                placeholder="Digite o nome da categoria"
                onKeyUp={this._handlerAdicionaCategoria} />
            </section>
        );
    }
}

export default ListaCategoria;