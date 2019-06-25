const express = require('express');
const routes = express.Router();

const spendsController = require("../controllers/spendsController");
const usersController = require("../controllers/usersController");
const categoryController = require("../controllers/categoryController");

/**
 * Users
 */
routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.details);
routes.post('/users', usersController.insert);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.delete);

/**
 * Spends
 */
routes.get('/spends', spendsController.index);
routes.get('/spends/:id', spendsController.details);
routes.post('/spends', spendsController.insert);
routes.put('/spends/:id', spendsController.update);
routes.delete('/spends/:id', spendsController.delete);

/**
 * Category
 */
routes.get('/categories', categoryController.index);
routes.get('/categories/:id', categoryController.details);
routes.post('/categories', categoryController.insert);
routes.put('/categories/:id', categoryController.update);
routes.delete('/categories/:id', categoryController.delete);

module.exports = routes;