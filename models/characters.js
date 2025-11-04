
import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb"; 

class charactersModel {
    
    // FUNCIÓN HELPER
    getCollection() {
        const db = dbClient.client.db("JujutsuCharacters"); 
        return db.collection("Sorcerers");
    }

    // CREATE
    async create(sorcerer){
        try {
            const colSorcerers = this.getCollection();
            const result = await colSorcerers.insertOne(sorcerer);
            return result; 
        } catch (error) {
            console.error("Error adding a new sorcerer:", error);
            throw error; 
        }
    }

    //READ (Obtener TODOS)
    async getAll(){
        try {
            const colSorcerers = this.getCollection();
            const sorcerers = await colSorcerers.find({}).toArray();
            return sorcerers; 
        } catch (error) {
            console.error("Error fetching all sorcerers:", error);
            throw error; 
        }
    }

    // READ (Obtener UNO) 
    async getOne(id){
        try {
            const colSorcerers = this.getCollection();
            const sorcerer = await colSorcerers.findOne({ 
                _id: new ObjectId(id) 
            }); 
            
            return sorcerer; 
        } catch (error) {
            console.error("Error fetching a sorcerer:", error);
            throw error; 
        }
    }

    // UPDATE 
    async update(id, data){
        try {
            const colSorcerers = this.getCollection();
            const result = await colSorcerers.updateOne(
                { _id: new ObjectId(id) }, // Filtro: encuentra por ID
                { $set: data }             // Datos: los nuevos valores a actualizar
            );
            return result; 
        } catch (error) {
            console.error("Error updating a sorcerer:", error);
            throw error; 
        }
    }

    // DELETE 
    async delete(id){
        try {
            const colSorcerers = this.getCollection();
            const result = await colSorcerers.deleteOne({ 
                _id: new ObjectId(id) 
            });
            
            return result; 
        } catch (error) {
            console.error("Error deleting a sorcerer:", error);
            throw error; 
        }
    }
}
export default new charactersModel()