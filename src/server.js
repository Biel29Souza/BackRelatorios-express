import express from "express";
import cors from "cors";
import { dbSamuel, dbAnderson, dbArthur, dbThamires } from "./db.js";
import relatoriosRoutes from "./routes/relatoriosRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rotas principais
app.use("/api/relatorios", relatoriosRoutes);

async function start() {
  try {
    // Testa conexão com todos os bancos
    await Promise.all([
      dbSamuel.authenticate(),
      dbAnderson.authenticate(),
      dbArthur.authenticate(),
      dbThamires.authenticate(),
    ]);
    console.log("✅ Todos os bancos conectados com sucesso.");

    // Inicia servidor
    app.listen(4009, () => {
      console.log("🚀 Servidor rodando na porta 4009");
    });
  } catch (error) {
    console.error("❌ Erro ao conectar com os bancos:", error);
  }
}

// Chama a função para iniciar
start();
