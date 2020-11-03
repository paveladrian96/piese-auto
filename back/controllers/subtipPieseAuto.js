const formidable = require ('formidable')
const _ = require ('lodash')
const fs = require("fs")

const { errorHandler } = require("../helpers/dbErrorHandler")
const SubtipPieseAuto = require ("../models/subtipPieseAuto")

exports.subtipPieseAutoById = (req, res, next, id) => {
    SubtipPieseAuto.findById(id).exec((err, subtipPieseAuto) => {
        if(err || !subtipPieseAuto) {
            return res.status(400).json({
                error: "Subtipul de piesa nu a fost gasita"
            })
        } 
        req.subtipPieseAuto = subtipPieseAuto
        next()
    })
}

exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.status(400).json({
                error: "Imaginea nu a putut fi incarcata"
            })
        }
        //check for all fields

        const {nume, tipPieseAuto} = fields

        if(!nume || !tipPieseAuto){
            return res.status(400).json({
                error: "Introduceti numele subtipului piesei auto"
            })
        }

        let subtipPieseAuto = new SubtipPieseAuto(fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            subtipPieseAuto.photo.data = fs.readFileSync(files.photo.path)
            subtipPieseAuto.photo.contentType = files.photo.type
        }

        subtipPieseAuto.save((err, result) => {
            if(err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result)
        })
    })
}

exports.update = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.status(400).json({
                error: "Imaginea nu a putut fi incarcata"
            })
        }
        //check for all fields

        const {nume, tipPieseAuto} = fields

        if(!nume || !tipPieseAuto){
            return res.status(400).json({
                error: "Introduceti numele"
            })
        }

        let subtipPieseAuto = req.subtipPieseAuto
        subtipPieseAuto = _.extend(subtipPieseAuto, fields)

        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Imaginea nu trebuie sa depaseasca 1mb"
                })
            }
            subtipPieseAuto.photo.data = fs.readFileSync(files.photo.path)
            subtipPieseAuto.photo.contentType = files.photo.type
        }

        subtipPieseAuto.save((err, result) => {
            if(err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result)
        })
    })
}

exports.remove = (req, res) => {
    let subtipPieseAuto = req.subtipPieseAuto
    subtipPieseAuto.remove((err, deletedsubTipPieseAuto) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler
            })
        }
        res.json({
            message: "Subtipul de piesa a fost sters cu succes"
        })
    })
}

exports.read = (req, res) => {
    // we do not send photo - inefficient
    req.subtipPieseAuto.photo = undefined
    return res.json(req.subtipPieseAuto)
}

exports.list = (req, res) => {
    SubtipPieseAuto.find()
        .select("-photo")
        .exec((err, data) => {
            if(err) {
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
        res.json(data)
    })
}

exports.photo = (req, res, next) => {
    if(req.subtipPieseAuto.photo.data) {
        res.set('Content-Type', req.subtipPieseAuto.photo.contentType)
        return res.send(req.subtipPieseAuto.photo.data)
    }
    next()
}