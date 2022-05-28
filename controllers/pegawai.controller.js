'use strict'

const db = require('../db')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const secret = '(*&^%$#@!)'

module.exports = {
    index: (req, res) => {
        let sql = 'select * from pegawai'

        db.query(sql, (error, results) => {
            if (error) {
                throw error
            } else {
            let response = {
                count: results.length,
                pegawai: results
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })
},
    getId: (req, res) => {
        const id = req.params.id;
        db.query(`select * from pegawai where idPegawai = '${id}'`, (err, results) => {
            if (err) throw err;
            res.json({
                message: "Berhasil Menampilkan Data",
                pegawai: results,
            });
        });
    },
<<<<<<< HEAD
    post: (req,res) => {
        let find = req.body.find
        let sql = "select * from pegawai where idPegawai like '%"+find+"%' or namaPegawai like '%"+find+"%' or alamatPegawai like '%"+find+"%'"
=======
    post: (req, res) => {
        let find = req.body.find
        let sql = "select * from pegawai where idPegawai like '%" + find + "%' or namaPegawai like '%" + find + "%' or alamatPegawai like '%" + find + "%'"
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019
        db.query(sql, (err, results) => {
            if (err) {
                throw err
            } else {
                let response = {
                    count: results.length,
                    pegawai: results
                }
<<<<<<< HEAD
            
                res.setHeader("Content-Type","application/json")
=======

                res.setHeader("Content-Type", "application/json")
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019
                res.send(JSON.stringify(response))
            }
        })
    },
    tambah: (req, res) => {

        let data = {
            namaPegawai: req.body.namaPegawai,
            alamatPegawai: req.body.alamatPegawai,
            email: req.body.email,
            password: md5(req.body.password)
        }
        
        if (!data.namaPegawai, !data.alamatPegawai, !data.email || !data.password) {
            res.status(402).json({
                message: 'Data harus diisi!'
            })
        } else {
            return db.query(`INSERT INTO pegawai SET ?`, data, (err, result) => {
                if (err) throw err;
                res.json({
                    data: result,
                    message: "data has been inserted",
                })
            })
        }
    },
    hapus: (req, res) => {
        const idPegawai = req.params.idPegawai
        let message = ""
        db.query(`DELETE FROM pegawai WHERE idPegawai = ?`, idPegawai, (err, results) => {
            if (err) {
                message = err.message
            } else {
                message = results.affectedRows + " row deleted"
            }
     
            let response = {
                message : message
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        })
    },

    ubah: (req, res) => {
        let data = [{
            namaPegawai: req.body.namaPegawai,
            alamatPegawai: req.body.alamatPegawai,
            email: req.body.email,
            password: req.body.password
        }, req.body.idPegawai]
        let message = ""
     
        let sql = "update pegawai set ? where idPegawai = ?"
        db.query(sql, data, (err,result) => {
            if (err) {
                message = err.message
            } else {
                message = result.affectedRows + " row updated"
            }
     
            let response = {
                message : message
            }
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        })
     
        
    },
    login: (req, res) => {

        let email = req.body.email
        let password = md5(req.body.password)

        if (!email || !password) {
            res.status(402).json({
                message: 'username and password cannot be empty.'
            })
        } else {

            let sql = `SELECT * FROM pegawai WHERE email = '${email}' AND password = '${password}'`

            if (sql) {
                db.query(sql, (error, results) => {
                    let payload = JSON.stringify(sql)
<<<<<<< HEAD
    
=======

>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019
                    let token = jwt.sign(payload, secret)
                    res.json({
                        logged: true,
                        token: token,
<<<<<<< HEAD
                        result: results
=======
                        data: results
>>>>>>> 143ac17d74b0390ab4d53f29d03b9b1b96d8d019
                    })
                })
            } else {
                res.json({
                    logged: false,
                    message: "Invalid email or password"
                })
            }
        }
    }
}