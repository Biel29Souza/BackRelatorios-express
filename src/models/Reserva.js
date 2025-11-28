import { DataTypes, Model } from "sequelize";
import { dbThamires } from "../db.js";

class Reserva extends Model {}

Reserva.init(
  {
    idReserva: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dataSolicitacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    statusReserva: {
      type: DataTypes.ENUM("Ativa", "Cancelada"),
      allowNull: false,
    },
    dataNotificacao: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    prazoEmprestimo: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dataRetirada: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dataDevolucao: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    idLivro: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: dbThamires,
    modelName: "Reserva",
    tableName: "reserva", // confirme se o nome é exatamente esse
    timestamps: false,
  }
);

export default Reserva;
