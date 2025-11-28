import { Sequelize } from "sequelize";

const dbSamuel = new Sequelize(
  "20252_prjint5_samueloliveira", 
  "20252_prjint5",                
  "Senac@2025",                   
  {
    host: "edumysql.acesso.rj.senac.br",
    dialect: "mysql",
    logging: false,
  }
);

const dbAnderson = new Sequelize(
  "20252_prjint5_andersonsales", 
  "20252_prjint5",
  "Senac@2025",
  {
    host: "edumysql.acesso.rj.senac.br",
    dialect: "mysql",
    logging: false,
  }
);

const dbArthur = new Sequelize(
  "20252_prjint5_arthursantanna", 
  "20252_prjint5",
  "Senac@2025",
  {
    host: "edumysql.acesso.rj.senac.br",
    dialect: "mysql",
    logging: false,
  }
);

const dbThamires = new Sequelize(
  "20252_prjint5_thamirescristina", 
  "20252_prjint5",
  "Senac@2025",
  {
    host: "edumysql.acesso.rj.senac.br",
    dialect: "mysql",
    logging: false,
  }
);

export { dbSamuel, dbAnderson, dbArthur, dbThamires };
