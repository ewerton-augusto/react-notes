import React, { Component } from 'react';
import './style.css';
import {ReactComponent as DeleteButton} from '../../../assets/img/delete.svg';

class NotaContent extends Component {
    
    deletar = () => {
        const indice = this.props.indice;
        this.props.deletarNota(indice);
    }

    render() {
        return (
            <section>
                <header className="nota-content__header">
                    <h1 className="nota-content__h1">{this.props.titulo}</h1>                    
                    <DeleteButton 
                    className="nota-content__delete"
                    onClick={this.deletar} />
                </header>
                <h2 className="nota-content__h2">{this.props.categoria}</h2>
                <p className="nota-content__p">{this.props.conteudo}</p>
            </section>
        );
    }
}

export default NotaContent;