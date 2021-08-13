const { Post } = require("../models");

const postData = [
    {
        title: "express.js",
        content: "Express is used to route pages together and to link databases and front end designs.",
        user_id: 1
    },
    {
        title: "Sequelize vs Mysql",
        content: "Sequelize saves having to source every table in the database, but you have to create models in javascript for the seeds.",
        user_id: 1
    },
    {
        title: "Is sequelize common?",
        content: "Whether a software company will use MySql or sequelize is largely a decision of preference. The engineers in that group wil be more accustomed to one or the other.",
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;