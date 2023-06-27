const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario');

router.get('/', usuarioController.getusuario);
router.post('/', usuarioController.createusuario);
router.post('/login', usuarioController.login);
router.post('/user', usuarioController.ValidaUser);


module.exports = router;