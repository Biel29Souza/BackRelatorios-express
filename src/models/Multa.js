import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";
import Usuario from "./Usuario.js";

class Multa extends Model {}

Multa.init(
  {
    valor: { type: DataTypes.FLOAT, allowNull: false },
    motivo: { type: DataTypes.STRING },
    dataEmissao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    modelName: "Multa",
    tableName: "multas",
    timestamps: false,
  }
);

// Relacionamento: uma multa pertence a um usuário
Multa.belongsTo(Usuario, { foreignKey: "usuarioId" });
Usuario.hasMany(Multa, { foreignKey: "usuarioId" });

export default Multa;
