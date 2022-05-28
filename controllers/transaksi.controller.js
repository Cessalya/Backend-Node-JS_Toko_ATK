'use strict'

const { append } = require('express/lib/response')
const db = require('../db')

module.exports = {
    index: (req, res) => {

        let sql = 'select transaksi.idTransaksi, user.namaUser, user.alamatUser, transaksi.tanggalTransaksi, transaksi.nomorTransaksi, detailtransaksi.idTransaksi , detailtransaksi.jumlahProduk from transaksi JOIN user ON transaksi.idUser = user.idUser JOIN detailtransaksi ON transaksi.idtransaksi = detailtransaksi.idtransaksi'; 

        db.query(sql, (error, results) => {
            if (error) {
                throw error
            } else {
                let response = {
                    count: results.length,
                    transaksi: results
                }

                res.setHeader("Content-Type", "application/json")
                res.send(JSON.stringify(response))
            }
        })
    },
    getId: (req, res) => {
        const id = req.params.id;
        db.query(`select * from transaksi join user on transaksi.idUser = user.idUser where idTransaksi = '${id}'`, (err, results) => {
            if (err) throw err;
            res.json({
                message: "Berhasil Menampilkan Data",
                data: results,
            });
        });
    },
    tambahTransaksi: (req, res) => {

        let current = new Date().toISOString().split("T")[0]

        let idUser = req.body.idUser
        let tanggalTransaksi = current

        db.query(`INSERT INTO transaksi SET?`, { idUser, tanggalTransaksi }, (err, results) => {
            if (err) throw err;
            res.json({
                message: "Berhasil menambahkan data",
                data: results
            });
        });
    },
    tambahDetailTransaksi: (req, res) => {
        let detail = {
            idTransaksi: req.body.idTransaksi,
            idProduk: req.body.idProduk,
            jumlahProduk: req.body.jumlahProduk,
            price: req.body.price
        }
        db.query(`INSERT INTO detailtransaksi SET ?`, detail, (err, results) => {
            if (err) throw err;
            res.json({
                message: "Berhasil Menambahkan Detail Transaksi",
                data: results,
            });
        });
    },
    hapus: (req, res) => {
        const id = req.params.id;
        db.query(`delete from transaksi where idTransaksi = ?`, id, (err, results) => {
            if (err) throw err;
            res.json({
                message: "Berhasil Menghapus Data",
                data: results,
            });
        });
    },
    bayar: (req, res) => {
        const id = req.params.idTransaksi;
        let data = {
            nomorTransaksi: req.body.nomorTransaksi,
            statusTransaksi: "LUNAS"
        }

        db.query(`update transaksi set ? where idTransaksi = ${id}`, data, (err, results) => {
            if (err) throw err;
            res.json({
                message: "Berhasil Mengubah status Data",
                data: results,
            });
        });
    },
}