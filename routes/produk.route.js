'use stric'

const express = require('express')
const produkController = require('../controllers/produk.controller')
const router = new express.Router()
<<<<<<< HEAD

=======
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019

const multer = require("multer")
const path = require("path")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images")
    },
    filename: (req, file, cb) => {
        cb(null, "img-" + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({ storage: storage })

router.get("/getProduk", produkController.index)
router.get("/getIdProduk/:id", produkController.getId)
<<<<<<< HEAD
router.post("/addProduk", upload.single("fotoProduk"), produkController.tambah)
router.post("/produk", produkController.post)
router.put("/updateProduk", upload.single("fotoProduk"), produkController.update)
=======
router.get("/getImage/:id", produkController.getImg)
router.post("/produk", produkController.post)
router.post("/addProduk", upload.single("fotoProduk"), produkController.tambah)
router.put("/updateProduk/:id", upload.single("fotoProduk"), produkController.update)
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019
router.delete("/dropProduk/:idProduk", produkController.hapus)

module.exports = router