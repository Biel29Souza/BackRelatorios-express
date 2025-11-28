import { DataTypes, Model } from "sequelize";
import { dbSamuel } from "../db.js";

class Usuario extends Model {}

Usuario.init(
  {
    usuario_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    usuario_email: { type: DataTypes.STRING(150), allowNull: false },
    usuario_nome: { type: DataTypes.STRING(130), allowNull: false },
    usuario_senha: { type: DataTypes.STRING(255), allowNull: false },
    usuario_telefone: { type: DataTypes.STRING(255), allowNull: true },
    usuario_endereco: { type: DataTypes.STRING(255), allowNull: true },
  },
  {
    sequelize: dbSamuel,
    modelName: "20252_prjint5_samueloliveira",
    tableName: "usuario",
    timestamps: false,
  }
);

export default Usuario;
