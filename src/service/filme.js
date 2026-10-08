import Filme from "../model/filme.js";

class ServiceFilme {

    Buscar() {
        return Filme.Buscar();
    }

    BuscarUm(id) {
        if ( !id || id < 0 || isNaN(id) || id >= Filme.Buscar().length ) {
            throw new Error("ID inválido!");
        }
        return Filme.BuscarUm(id);
    }

    Criar(titulo, classificacao, descricao, lancado) {
        if ( !titulo || typeof titulo !== "string" ) {
            throw new Error("O título do filme é inválido!");
        }
        Filme.Criar(titulo, classificacao, descricao, lancado);
    }

    Alterar(id, titulo, classificacao, descricao, lancado) {
        
        if ( !id || isNaN(id) ) {
            throw new Error("ID inválido!");
        }

        if ( !titulo || typeof titulo !== "string" ) {
            throw Error("O nome do filme é inválido!");
        }

        Filme.Alterar(id, titulo, classificacao, descricao, lancado);
    }

    Deletar(id) {
        if ( !id || isNaN(id) ) {
            throw new Error("ID inválido!");
        }
        Filme.Deletar(id);
    }

    Status(id, lancado) {
        
        if ( !id || isNaN(id) ) {
            throw new Error("ID inválido!");
        }
   
        Filme.Alterar(id, lancado);
    }
}

export default new ServiceFilme();