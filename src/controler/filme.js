import ServiceFilme from "../service/filme.js";

class ControllerFilme {

    Buscar(req, res) {
        try {
            const filmes = ServiceFilme.Buscar();
            res.send({ filmes });
        } catch (error) {
            res.status(400).send({ error: error.message});
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id;
            const filme = ServiceFilme.BuscarUm(id);
            res.status(201).send({ filme });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    Criar(req, res) {
        try {
            const titulo = req.body.titulo;
            const classificacao = req.body.classificacao;
            const descricao = req.body.descricao;
            const lancado = req.body.lancado;

            ServiceFilme.Criar(titulo, classificacao, descricao, lancado);
            
            res.status(201).send({ message: "Filme cadastrado com sucesso!" });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id;
            const titulo = req.body.titulo;
            const classificacao = req.body.classificacao;
            const descricao = req.body.descricao;
            const lancado = req.body.lancado;
            ServiceFilme.Alterar(id, titulo, classificacao, descricao, lancado);
            res.status(201).send({ message: "Filme alterado com sucesso!" });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id;
            ServiceFilme.Deletar(id);
            res.status(201).send({ message: "Filme excluído com sucesso!" });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    Status(req, res) {

    }
}

export default new ControllerFilme();