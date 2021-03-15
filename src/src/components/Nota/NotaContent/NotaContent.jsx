import React, { Component } from 'react';
import './style.css';

class NotaContent extends Component {
    state = {}
    render() {
        return (
            <section>
                <header className="nota-content__header">
                    <h1 className="nota-content__h1">{this.props.titulo}</h1>                    
                </header>
                <p className="nota-content__p">{this.props.conteudo}</p>
            </section>
        );
    }
}

export default NotaContent;