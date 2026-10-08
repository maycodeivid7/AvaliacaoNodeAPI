const filmes = new Array("Filme 1", "Filme 2", "Filme 3");

class Filme {

    Buscar() {
        return filmes;
    }

    BuscarUm(id) {
        return filmes[id];
    }

    Criar(filme) {
        filmes.push(filme);
    }

    Alterar(id, filme) {
        filmes[id] = filme;
    }

    Deletar(id) {
        filmes.splice(id, 1);
    }
    
}

export default new Filme();