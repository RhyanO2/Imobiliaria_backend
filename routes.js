const express = require('express');
const imovelController = require('./src/controllers/imovelController');
const userController = require('./src/controllers/user/userController');
const authController = require('./src/controllers/user/authController');
const router = express.Router();


router.post('/usuarios', authController.RegisterUser);
router.post('/usuarios/login', authController.LoginUser);
router.get('/usuarios', userController.GetUsers);
router.get('/usuarios/:id', userController.GetUserById);
router.put('/usuarios/:id', userController.PutUserName);
router.put('/usuarios/:id', userController.PutUserEmail);
router.delete('/usuarios/:id', userController.DelUser);

router.get('/imoveis', imovelController.GetImoveis);
router.get('/imoveis/:id', imovelController.GetImovelById);
router.post('/imoveis', imovelController.PostImovel);
router.put('/imoveis/:id', imovelController.PutImovel);
router.delete('/imoveis/:id', imovelController.DelImovel);



module.exports = router;