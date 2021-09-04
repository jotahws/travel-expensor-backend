const express = require('express');
const routes = express.Router();

const ExpenseController = require('./controllers/ExpenseController');

routes.get("/expenses", ExpenseController.index);
routes.get("/expenses/:id", ExpenseController.show);
routes.post("/expenses", ExpenseController.store);
routes.put("/expenses/:id", ExpenseController.update);
routes.delete("/expenses/:id", ExpenseController.destroy);

module.exports = routes;