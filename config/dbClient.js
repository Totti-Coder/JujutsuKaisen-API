import {MongoClient} from "mongodb"


class dbClient {
    constructor(){
        const queryString =`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?appName=jujutsu`
        this.client = new MongoClient(queryString)
        this.connectDB("JujutsuCharacters")
    }

    async connectDB(){
        try {
            await this.client.connect()
            this.db = this.client.db
            console.log("Conected to Data Base Server")
            
        } catch (error) {
            console.log(error)
        }
    }
}

export default new dbClient