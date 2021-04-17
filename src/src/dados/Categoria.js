export default class Categoria{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    //Padrão de projeto Observable
    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}