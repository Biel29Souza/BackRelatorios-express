import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";
import Usuario from "./Usuario.js";

class Atraso extends Model {}

Atraso.init(
  {
    diasAtraso: { type: DataTypes.INTEGER, allowNull: false },
    dataPrevista: { type: DataTypes.DATE, allowNull: false },
    dataDevolucao: { type: DataTypes.DATE },
  },
  {
    sequelize,
    modelName: "Atraso",
    tableName: "atrasos",
    timestamps: false,
  }
);

// Relacionamento: um atraso pertence a um usuário
Atraso.belongsTo(Usuario, { foreignKey: "usuarioId" });
Usuario.hasMany(Atraso, { foreignKey: "usuarioId" });

export default Atraso;
