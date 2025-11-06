import charactersModel from "../models/characters.js"

class characterController {
    constructor(){

    }

    async create(req, res){
        try {
            const data = await charactersModel.create(req.body)
            res.status(201).json(data)
        }catch (e){
            res.status(500).send(e)
        }
    }

     // CREATE MANY 
    async createMany(req, res){
        try {
            const sorcerers = req.body;
            
            if (!Array.isArray(sorcerers)) {
                return res.status(400).json({ 
                    error: "Body must be an array of sorcerers" 
                });
            }
            
            const result = await charactersModel.createMany(sorcerers);
            res.status(201).json({
                message: "Sorcerers created successfully",
                insertedCount: result.insertedCount,
                insertedIds: result.insertedIds
            });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }


    async update(req, res){
        try {
            const { id } = req.params // Obtain ID
        const dataToUpdate = req.body // Obtain all data
        const result = await charactersModel.update(id, dataToUpdate)
            res.status(200).json(result)
        }catch (e){
            res.status(500).send(e)
        }
    }
    async delete(req, res){
        try {
            const {id} = req.params
            const data = await charactersModel.delete(id)
            res.status(206).json(data)
        }catch (e){
            res.status(500).send(e)
        }
    }
    async getAll(req, res){
        try {
            const data = await charactersModel.getAll()
            res.status(201).json(data)
        }catch (e){
            res.status(500).send(e)
        }
    }
    async getOne(req, res){
        try {
            const {id} = req.params
            const data = await charactersModel.getOne(id)
            res.status(201).json(data)
        }catch (e){
            res.status(500).send(e)
        }
    }
}
export default new characterController()