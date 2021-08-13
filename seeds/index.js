const sequelize = require("../config/connection");

const seedUsers = require("./users-seeds");
const seedPosts = require("./post-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("-------SYNC STARTED-------");

  await seedUsers();
  console.log('------USERS SEEDED----------');

  await seedPosts();
  console.log('------POSTS SEEDED---------')

  process.exit(0);
};

seedAll();
