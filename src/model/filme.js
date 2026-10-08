//const filmes = new Array("Filme 1", "Filme 2", "Filme 3");

const filmes = new Array(
    {
        titulo: "Título Filme 1",
        classificacao: 12,
        descricao: "Descrição do Filme 1",
        lancado: true
    },
    {
        titulo: "Título Filme 2",
        classificacao: 16,
        descricao: "Descrição do Filme 2",
        lancado: false
    },
    {
        titulo: "Título Filme 3",
        classificacao: 0,
        descricao: "Descrição do Filme 3",
        lancado: true
    }
);

class Filme {

    Buscar() {
        return filmes;
    }

    BuscarUm(id) {
        return filmes[id];
    }

    Criar(titulo, classificacao, descricao, lancado) {
        filmes.push({ titulo, classificacao, descricao, lancado });
    }

    Alterar(id, filme) {
        filmes[id] = filme;
    }

    Deletar(id) {
        filmes.splice(id, 1);
    }
    
}

export default new Filme();