import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('task5.4', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});
