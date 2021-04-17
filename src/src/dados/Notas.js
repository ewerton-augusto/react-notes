export default class ArrayNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    //Padrão de projeto Observable
    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => {
            func(this.notas);
        });
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    criarNota(titulo, texto, categoria){
        const novaNota = new Notas(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    deletarNota(indice){
        this.notas.splice(indice, 1);
        this.notificar();
    }
}

class Notas{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.text = texto;
        this.categoria = categoria;
    }
}