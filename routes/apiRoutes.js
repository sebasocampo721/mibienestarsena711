const express = require('express');
const router = express.Router();

const rolesController = require('../controllers/rolesController');
const usersController = require('../controllers/usersController');
const categoriesController = require('../controllers/categoriesController');
const eventsController = require('../controllers/eventsController');

// Rutas Roles
router.get('/roles', rolesController.getAll);
router.get('/roles/:id', rolesController.getOne);
router.post('/roles', rolesController.create);
router.put('/roles/:id', rolesController.update);
router.delete('/roles/:id', rolesController.delete);

// Rutas Users
router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getOne);
router.post('/users', usersController.create);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

// Rutas Categories
router.get('/categories', categoriesController.getAll);
router.get('/categories/:id', categoriesController.getOne);
router.post('/categories', categoriesController.create);
router.put('/categories/:id', categoriesController.update);
router.delete('/categories/:id', categoriesController.delete);

// Rutas Events
router.get('/events', eventsController.getAll);
router.get('/events/:id', eventsController.getOne);
router.post('/events', eventsController.create);
router.put('/events/:id', eventsController.update);
router.delete('/events/:id', eventsController.delete);

module.exports = router;
