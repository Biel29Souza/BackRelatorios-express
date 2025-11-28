import { DataTypes, Model } from "sequelize";
import { dbArthur } from "../db.js";

class Emprestimo extends Model {}

Emprestimo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dataEmprestimo: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dataPrevista: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dataDevolucao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    multa: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    idUsuario: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idBibliotecario: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    idLivro: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: dbArthur,
    modelName: "Emprestimo",
    tableName: "emprestimo", // confirme se o nome da tabela é exatamente esse
    timestamps: false,
  }
);

export default Emprestimo;
