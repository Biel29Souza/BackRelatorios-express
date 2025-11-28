import { Op } from "sequelize";
import Usuario from "../models/Usuario.js";       // banco: samueloliveira
import Livro from "../models/Livro.js";           // banco: andersonsales
import Emprestimo from "../models/Emprestimo.js"; // banco: arthurguedes
import Reserva from "../models/Reserva.js";       // banco: thamirescristina
import Estoque from "../models/Estoque.js";       // banco: andersonsales
import Bibliotecario from "../models/Bibliotecario.js";


// Relatório de usuários (Samuel)
export async function relatorioUsuarios(req, res) {
  try {
    const { nome, email } = req.query;
    const where = {};
    if (nome) where.usuario_nome = { [Op.like]: `%${nome}%` };
    if (email) where.usuario_email = { [Op.like]: `%${email}%` };

    const usuarios = await Usuario.findAll({ where });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao gerar relatório de usuários",
      detalhes: error.message,
    });
  }
}

// Relatório de livros (Anderson)
export async function relatorioLivros(req, res) {
  try {
    const { titulo, editora } = req.query;
    const where = {};
    if (titulo) where.titulo = { [Op.like]: `%${titulo}%` };
    if (editora) where.editora = { [Op.like]: `%${editora}%` };

    const livros = await Livro.findAll({ where });
    res.json(livros);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao gerar relatório de livros",
      detalhes: error.message,
    });
  }
}

// Relatório de empréstimos (Arthur)
export async function relatorioEmprestimos(req, res) {
  try {
    const { status } = req.query;
    const where = {};
    if (status) where.status = { [Op.like]: `%${status}%` };

    const emprestimos = await Emprestimo.findAll({ where });
    res.json(emprestimos);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao gerar relatório de empréstimos",
      detalhes: error.message,
    });
  }
}

// Relatório de reservas (Thamires)
export async function relatorioReservas(req, res) {
  try {
    const { statusReserva } = req.query;
    const where = {};
    if (statusReserva) where.statusReserva = { [Op.eq]: statusReserva };

    const reservas = await Reserva.findAll({ where });
    res.json(reservas);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao gerar relatório de reservas",
      detalhes: error.message,
    });
  }
}

// Relatório de estoques (Anderson)
export async function relatorioEstoques(req, res) {
  try {
    const { minQuantidade, idlivro } = req.query;
    const where = {};

    if (minQuantidade) {
      where.quantidade = { [Op.gte]: parseInt(minQuantidade, 10) };
    }

    if (idlivro) {
      where.idlivro = { [Op.eq]: parseInt(idlivro, 10) };
    }

    const estoques = await Estoque.findAll({ where });
    res.json(estoques);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao gerar relatório de estoques",
      detalhes: error.message,
    });
  }
}


// Relatório de bibliotecários (Samuel)
export async function relatorioBibliotecarios(req, res) {
  try {
    const { nome, login } = req.query;
    const where = {};
    if (nome) where.bibliotecario_nome = { [Op.like]: `%${nome}%` };
    if (login) where.bibliotecario_login = { [Op.like]: `%${login}%` };

    const bibliotecarios = await Bibliotecario.findAll({ where });
    res.json(bibliotecarios);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao gerar relatório de bibliotecários",
      detalhes: error.message,
    });
  }
}