import express from "express"

const route = express.Router()

import cursesController from "../controllers/curses.js"

route.post("/", cursesController.create)
route.post("/bulk", cursesController.createMany)
route.get("/:id", cursesController.getOne)
route.get("/", cursesController.getAll)
route.put("/:id", cursesController.update)
route.delete("/:id", cursesController.delete)

export default route