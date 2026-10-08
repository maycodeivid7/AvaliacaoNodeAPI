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

    Criar(filme) {
        if ( !filme || typeof filme !== "string" ) {
            throw new Error("Nome inválido!");
        }
        Filme.Criar(filme);
    }

    Alterar(id, filme) {
        
        if ( !id || isNaN(id) ) {
            throw new Error("ID inválido!");
        }

        if ( !filme || typeof filme !== "string" ) {
            throw Error("O nome do filme é inválido!");
        }

        Filme.Alterar(id, filme);
    }

    Deletar(id) {
        if ( !id || isNaN(id) ) {
            throw new Error("ID inválido!");
        }
        Filme.Deletar(id);
    }

}

export default new ServiceFilme();