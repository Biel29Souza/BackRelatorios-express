import { DataTypes, Model } from "sequelize";
import { dbSamuel } from "../db.js";

class Bibliotecario extends Model {}

Bibliotecario.init(
  {
    bibliotecario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bibliotecario_login: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    bibliotecario_senha: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    bibliotecario_nome: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    sequelize: dbSamuel,
    modelName: "Bibliotecario",
    tableName: "bibliotecario",
    timestamps: false,
  }
);

export default Bibliotecario;
