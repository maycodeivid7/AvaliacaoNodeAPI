import express from "express";
import ControllerFilme from "../controler/filme.js";

const router = express.Router();

router.get("/buscar", ControllerFilme.Buscar);
router.get("/buscarum/:id", ControllerFilme.BuscarUm);
router.post("/criar", ControllerFilme.Criar);
router.put("/alterar/:id", ControllerFilme.Alterar);
router.delete("/deletar/:id", ControllerFilme.Deletar);

export default router;
