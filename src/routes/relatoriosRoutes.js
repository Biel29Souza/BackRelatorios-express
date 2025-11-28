import express from "express";
import {
  relatorioUsuarios,
  relatorioLivros,
  relatorioEmprestimos,
  relatorioReservas,
  relatorioEstoques,
  relatorioBibliotecarios,
  relatorioTiposUsuarios,
  relatorioUsuariosPorMes,
  exportarUsuarios,
  atualizarUsuarios
} from "../controllers/relatoriosController.js";


const router = express.Router();

router.get("/usuarios", relatorioUsuarios);
router.get("/livros", relatorioLivros);
router.get("/emprestimos", relatorioEmprestimos);
router.get("/reservas", relatorioReservas);
router.get("/estoques", relatorioEstoques);
router.get("/bibliotecarios", relatorioBibliotecarios);
router.get("/usuarios/tipos", relatorioTiposUsuarios);
router.get("/usuarios/mes", relatorioUsuariosPorMes);
router.get("/usuarios/exportar", exportarUsuarios);
router.get("/usuarios/atualizar", atualizarUsuarios);


export default router;
