'use strict'

const express = require("express")
const pegawaiController = require('../controllers/pegawai.controller')
const router = new express.Router()
<<<<<<< HEAD


=======
// const { auth } = require('../auth/auth')

>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019
router.get("/getPegawai", pegawaiController.index)
router.get("/getIdPegawai/:id", pegawaiController.getId)
router.post("/pegawai", pegawaiController.post)
router.post("/addPegawai", pegawaiController.tambah)
router.delete("/dropPegawai/:idPegawai", pegawaiController.hapus)
<<<<<<< HEAD
router.put("/updatePegawai", pegawaiController.ubah)
=======
router.put("/updatePegawai/:idPegawai", pegawaiController.ubah)
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019

router.post("/loginPegawai", pegawaiController.login)

module.exports = router