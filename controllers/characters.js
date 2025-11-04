import charactersModel from "../models/characters.js"

class characterController {
    constructor(){

    }

    async create(req, res){
        try {
            const data = charactersModel.create(req.body)
            res.status(201).json(data)
        }catch (e){
            res.status(500).send(e)
        }
    }
    async update(req, res){
        try {
            res.status(201).json({status: "update-okey"})
        }catch (e){
            res.status(500).send(e)
        }
    }
    async delete(req, res){
        try {
            res.status(201).json({status: "delete-okey"})
        }catch (e){
            res.status(500).send(e)
        }
    }
    async getAll(req, res){
        try {
            res.status(201).json({status: "getall-okey"})
        }catch (e){
            res.status(500).send(e)
        }
    }
    async getOne(req, res){
        try {
            res.status(201).json({status: "getone-okey"})
        }catch (e){
            res.status(500).send(e)
        }
    }
}
export default new characterController()