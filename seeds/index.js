
const seedUsers = require("./users-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("-------SYNC STARTED-------");

  await seedUsers();
  console.log('------USERS SEEDED----------');


  process.exit(0);
};

seedAll();
