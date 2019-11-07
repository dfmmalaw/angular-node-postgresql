import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    database : "zemit",
    dialect : "postgres",
    username : "postgres",
    password : "postgres",
    host : "localhost",
    port : 5432
});
sequelize.authenticate().then(() => {
 console.log("Connected to DB");
})
.catch((err) => {
 console.log(err);
})