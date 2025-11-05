import express from "express"
import "dotenv/config"
import routesSorcerers from "./routes/characters.js"
import routesCurses from "./routes/curses.js" 
import bodyParser from "body-parser"
import cors from "cors"
import dbClient from "./config/dbClient.js"

const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({ 
        message: "JujutsuKaisenAPI",
        endpoints: {
            sorcerers: "/jujutsusorcerers",
            curses: "/jujutsucurses"
        }
    })
})

app.use("/jujutsusorcerers", routesSorcerers)
app.use("/jujutsucurses", routesCurses) 



const startServer = async () => {
    try {
        await dbClient.connectDB()
        
        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => {
            console.log(`Active server at the port ${PORT}`)
        })
    } catch(e){
        console.error("Error initializing:", e)
        process.exit(1)
    }
}

startServer()