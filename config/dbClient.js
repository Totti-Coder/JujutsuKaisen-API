import { MongoClient } from "mongodb"

class dbClient {
    constructor(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=jujutsu`
        
        this.client = new MongoClient(queryString, {
            tls: true, 
            serverSelectionTimeoutMS: 5000
        })
        this.db = null
        this.isConnected = false
    }

    async connectDB(){
        try {
            await this.client.connect()
            this.db = this.client.db("JujutsuCharacters")
            this.isConnected = true
            console.log("Conected to MongoDB")
            return this.db
        } catch (error) {
            console.error("An error has ocurred:", error)
            throw error
        }
    }
}

export default new dbClient()