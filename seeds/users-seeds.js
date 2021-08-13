const { User } = require("../models");

const usersData = [
    {
        username: "jondoe@gmail.com",
        password: "123456789"
    },
    {
        username: "sandybeach@aol.com",
        password: "123#ndjeu"
    },
    {
        username: "johannbgullan@me.com",
        password: "Gugehnheim42"
    }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;
