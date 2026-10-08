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
            const filme = req.body.filme;
            ServiceFilme.Criar(filme);
            res.status(201).send({ message: "Filme cadastrado com sucesso!" });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id;
            const filme = req.body.filme;
            ServiceFilme.Alterar(id, filme);
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
}

export default new ControllerFilme();