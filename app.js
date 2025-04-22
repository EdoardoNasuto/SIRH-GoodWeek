import express from 'express';
import { adminJs, router } from './admin.js';
import db from './models/index.js';

const app = express();
const port = 3000;

app.use(adminJs.options.rootPath, router);

db.sequelize.sync({ alter: false }).then(() => {
    app.listen(port, () => {
        console.log(`AdminJS est dispo sur http://localhost:${port}${adminJs.options.rootPath}`);
    });
});