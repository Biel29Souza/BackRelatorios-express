import { DataTypes, Model } from "sequelize";
import { dbAnderson } from "../db.js";

class Estoque extends Model {}

Estoque.init(
  {
    idEstoque: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "idEstoque",
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "quantidade",
    },
    idlivro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "idlivro",
    },
  },
  {
    sequelize: dbAnderson,
    modelName: "Estoque",
    tableName: "estoque", // confirme se está singular ou plural no banco
    timestamps: false,
    freezeTableName: true,
  }
);

export default Estoque;
