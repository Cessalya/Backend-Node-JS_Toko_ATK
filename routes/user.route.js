'use strict'

const express = require("express")
const userController = require('../controllers/user.controller')
const router = new express.Router()

router.get('/getUser', userController.index)
<<<<<<< HEAD
router.get('/getIdUser/:id', userController.getId)
router.post('/addUser',  userController.tambah)
router.delete('/dropUser/:idUser', userController.hapus)
router.put('/updateUser', userController.ubah)
=======
router.get('getIdUser/:id', userController.getId)
router.post('/addUser', userController.tambah)
router.delete('/dropUser/:idUser', userController.hapus)
router.put('/updateUser/:idUser', userController.ubah)
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019

router.post('/loginUser', userController.login)

module.exports = router