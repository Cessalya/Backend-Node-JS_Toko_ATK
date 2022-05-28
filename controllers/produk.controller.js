'use strict'

const db = require('../db')

module.exports = {
    index: (req, res) => {
        let sql = 'select * from produk'

        db.query(sql, (error, results) => {
<<<<<<< HEAD
            if (error) {
                throw error
            } else {
                let response = {
                    count: results.length,
                    produk: results
                }

                res.setHeader("Content-Type", "application/json")
                res.send(JSON.stringify(response))
            }
=======
            if (error) throw (error)
            res.json({
                message: "berhasil menampilkan data",
                produk: results
            })
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019
        })
    },

    getId: (req, res) => {
        const id = req.params.id;
        db.query(`select * from produk where idProduk = '${id}'`, (err, results) => {
            if (err) throw err;
            res.json({
                message: "Berhasil Menampilkan Data",
                data: results,
            });
        });
    },
<<<<<<< HEAD
=======
    getImg: (req, res) => {
        const id = req.params.id;
        db.query(`select fotoProduk from produk where idProduk = '${id}'`, (err, results) => {
            if (err) throw err;
            res.json({
                message: "Berhasil Menampilkan Data",
                data: results,
            });
        });
    },
    post: (req, res) => {
        let find = req.body.find
        let sql = "select * from produk where idProduk like '%" + find + "%' or namaProduk like '%" + find + "%' or deskripsiProduk like '%" + find + "%'"
        db.query(sql, (err, results) => {
            if (err) {
                throw err
            } else {
                let response = {
                    count: results.length,
                    produk: results
                }

                res.setHeader("Content-Type", "application/json")
                res.send(JSON.stringify(response))
            }
        })
    },
    tambah: (req, res) => {
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019

    post: (req, res) => {
        let find = req.body.find
        let sql = "select * from produk where idProduk like '%" + find + "%' or namaProduk like '%" + find + "%' or deskripsiProduk like '%" + find + "%'"
        db.query(sql, (err, results) => {
            if (err) {
                throw err
            } else {
                let response = {
                    count: results.length,
                    produk: results
                }

                res.setHeader("Content-Type", "application/json")
                res.send(JSON.stringify(response))
            }
        })
    },

    tambah: (req, res) => {
        let data = {
            namaProduk: req.body.namaProduk,
            deskripsiProduk: req.body.deskripsiProduk,
            hargaProduk: req.body.hargaProduk
        }

        if (!data.namaProduk, !data.deskripsiProduk || !data.hargaProduk) {
            res.status(402).json({
                message: 'Data harus diisi!'
            });
        } if (req.file) {
            data.fotoProduk = req.file.filename
            return db.query(`INSERT INTO produk SET?`, data, (err, results) => {
                if (err) throw err;
                res.json({
                    data: data,
                    message: "data has been inserted",
                })
            })
        } else {
<<<<<<< HEAD
            db.query(`INSERT INTO produk SET?`, data, (err, results) => {
                if (err) throw err;
                res.json({
                    data: data
=======
            return db.query(`INSERT INTO produk SET?`, { namaProduk, deskripsiProduk, hargaProduk, fotoProduk }, (error, result) => {
                if (error) throw (error)
                res.json({
                    message: "berhasil menambahkan data",
                    data: result
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019
                })
            })
        }
    },
    hapus: (req, res) => {
        const idProduk = req.params.idProduk
        let message = ""
        db.query(`DELETE FROM produk WHERE idProduk = ?`, idProduk, (err, results) => {
            if (err) {
                message = err.message
            } else {
                message = results.affectedRows + " row deleted"
            }

            let response = {
                message: message
            }
            res.setHeader("Content-Type", "application/json")
            res.send(JSON.stringify(response))
        })
    },
    update: (req, res) => {
        let data = [{
            namaProduk: req.body.namaProduk,
            deskripsiProduk: req.body.deskripsiProduk,
            hargaProduk: req.body.hargaProduk,
        }, req.body.idProduk]
        let message = ""

        if (req.file) {
            data.fotoProduk = req.file.filename;
            const idProduk = req.params.idProduk
            db.query(`update produk set ? where ? `, idProduk, data, (err, result) => {
                if (err) {
                    message = err.message
                } else {
                    message = result.affectedRows + " row updated"
                }

                let response = {
                    message: message
                }
                res.setHeader("Content-Type", "application/json")
                res.send(JSON.stringify(response))
            });
        } else {
            // const idProduk = req.params.idProduk
            db.query(`update produk set ? where idProduk = ?  `,data, (err, result) => {
                if (err) {
                    message = err.message
                } else {
                    message = result.affectedRows + " row updated"
                }

                let response = {
                    message: message
                }
                res.setHeader("Content-Type", "application/json")
                res.send(JSON.stringify(response))
            });
        }
    }
}