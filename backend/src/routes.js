const { Router } = require('express');
const SessionController = require('./controllers/SessionController');
const HouseController = require('./controllers/HouseController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/houses',upload.single('thumbnail'),HouseController.store);

routes.get('/houses',HouseController.index);
routes.put('/houses/:house_id',upload.single('thumbnail'),HouseController.update);


module.exports = routes;