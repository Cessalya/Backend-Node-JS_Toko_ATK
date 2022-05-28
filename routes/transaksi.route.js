'use strict'

const express = require("express")
const transaksiController = require('../controllers/transaksi.controller')
const router = new express.Router()

<<<<<<< HEAD


=======
// const { auth } = require('../auth/auth')

>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019
router.get('/getTransaksi', transaksiController.index)
router.get('/getIdTransaksi/:id', transaksiController.getId)
router.post('/tambahTransaksi', transaksiController.tambahTransaksi)
router.post('/tambahDetail', transaksiController.tambahDetailTransaksi)
<<<<<<< HEAD
router.delete('/hapusTransaksi/:id', transaksiController.hapus)
router.put('/updateTransaksi', transaksiController.bayar)
=======
router.delete('/toko/hapusTransaksi/:id', transaksiController.hapus)
router.put('/updateTransaksi/:idTransaksi', transaksiController.bayar)
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019

module.exports = router