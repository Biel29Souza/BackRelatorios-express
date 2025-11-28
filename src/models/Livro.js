import { DataTypes, Model } from "sequelize";
import { dbAnderson } from "../db.js";

class Livro extends Model {}

Livro.init(
  {
    idLivro: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: { type: DataTypes.STRING(200), allowNull: true },
    ano: { type: DataTypes.INTEGER, allowNull: true },
    edicao: { type: DataTypes.STRING(50), allowNull: true },
    editora: { type: DataTypes.STRING(100), allowNull: true },
    isbn: { type: DataTypes.STRING(20), allowNull: true },
  },
  {
    sequelize: dbAnderson,
    modelName: "20252_prjint5_andersonsales",
    tableName: "livro", 
    timestamps: false,
  }
);

export default Livro;
