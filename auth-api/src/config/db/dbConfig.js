import Sequelize from "sequelize";

const sequelize = new Sequelize("auth-db", "postgres", "postgres123", {
  host: "localhost",
  dialect: "postgres",
  quoteIdentifiers: "false",
  define: {
    syncAssociation: true,
    timestamps: false,
    undescored: true,
    undescoredAll: true,
    freezeTableName: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.info("Connection has been stablished");
  })
  .catch((err) => {
    console.error("Unable to connect to the database");
    console.error(err.message);
  });

export default sequelize;
