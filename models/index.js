import fs from 'fs';
import Sequelize from 'sequelize';
import { createRequire } from 'module';

// for admin.js
import AdminJS from 'adminjs';
import * as AdminJSSequelize from '@adminjs/sequelize'
AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
})

const require = createRequire(import.meta.url);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config);

const modelFiles = fs.readdirSync('./models')
  .filter(file => file !== 'index.js' && file.endsWith('.js'));

for (const file of modelFiles) {
  const { default: defineModel } = await import(`./${file}`);
  const model = defineModel(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
}

Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

// Populate mod :
//import { populate } from '../scripts/populate.js';
//await populate(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
