const express = require('express');
const imovelController = require('./src/controllers/imovelController');
const userController = require('./src/controllers/userController');
const authController = require('./src/controllers/authController');
const router = express.Router();


router.post('/auth/register', authController.RegisterUser)
router.post('/auth/login', authController.LoginUser)

router.get('/user', userController.GetUsers);
router.get('/user/:id', userController.GetUserById);
router.put('/user/name/:id', userController.PutUserName);
router.put('/user/email/:id', userController.PutUserEmail);
router.delete('/user/:id', userController.DelUser);

router.get('/imovel', imovelController.GetImoveis);
router.get('/imovel/:id', imovelController.GetImovelById);
router.post('/imovel', imovelController.PostImovel);
router.put('/imovel/:id', imovelController.PutImovel);
router.delete('/imovel/:id', imovelController.DelImovel);



module.exports = router;