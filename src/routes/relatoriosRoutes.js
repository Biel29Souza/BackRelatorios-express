import express from "express";
import {
  relatorioUsuarios,
  relatorioLivros,
  relatorioEmprestimos,
  relatorioReservas,
  relatorioEstoques,
  relatorioBibliotecarios
} from "../controllers/relatoriosController.js";


const router = express.Router();

router.get("/usuarios", relatorioUsuarios);
router.get("/livros", relatorioLivros);
router.get("/emprestimos", relatorioEmprestimos);
router.get("/reservas", relatorioReservas);
router.get("/estoques", relatorioEstoques);
router.get("/bibliotecarios", relatorioBibliotecarios);

export default router;
