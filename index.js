'use strict'

//inisialisasi
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

//implementasi
const app = express()
app.use(express.json())

app.use(express.static(__dirname))

<<<<<<< HEAD

=======
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({
    extended: true
}))

//menghubungkan ke database
const db = require('./db')
db.connect(err => {
    if (err) console.log(err.message)
    else console.log("koneksi berhasil")
})


//endpoint
app.get("/halo", (req, res) => {

    res.send({
        message: "berhasil menjalankan GET",
        data: {
            description:
                "endpoint menampilkan data"
        }
    })
})

app.use("/toko", require('./routes/pegawai.route'))
app.use("/toko", require('./routes/produk.route'))
app.use("/toko", require('./routes/user.route'))
app.use("/toko", require('./routes/transaksi.route'))

const port = 8000;
app.listen(port, () => {
    console.log(`Server di port ${port}`)
})
