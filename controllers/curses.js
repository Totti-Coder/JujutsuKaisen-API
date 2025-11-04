import cursesModel from "../models/curses.js"

class cursesController {
    constructor(){

    }

    async create(req, res){
        try {
            const data = cursesModel.create(req.body)
            res.status(201).json(data)
        }catch (e){
            res.status(500).send(e)
        }
    }
    async update(req, res){
        try {
            const { id } = req.params // Obtain ID
        const dataToUpdate = req.body // Obtain all data
        const result = await cursesModel.update(id, dataToUpdate)
            res.status(200).json(result)
        }catch (e){
            res.status(500).send(e)
        }
    }
    async delete(req, res){
        try {
            const {id} = req.params
            const data = await cursesModel.delete(id)
            res.status(206).json(data)
        }catch (e){
            res.status(500).send(e)
        }
    }
    async getAll(req, res){
        try {
            const data = await cursesModel.getAll()
            res.status(201).json(data)
        }catch (e){
            res.status(500).send(e)
        }
    }
    async getOne(req, res){
        try {
            const {id} = req.params
            const data = await cursesModel.getOne(id)
            res.status(201).json(data)
        }catch (e){
            res.status(500).send(e)
        }
    }
}
export default new cursesController()