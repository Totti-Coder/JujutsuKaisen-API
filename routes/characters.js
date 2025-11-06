import express from "express"

const route = express.Router()

import characterController from "../controllers/characters.js"

route.post("/", characterController.create)
route.post("/bulk", characterController.createMany)
route.get("/:id", characterController.getOne)
route.get("/", characterController.getAll)
route.put("/:id", characterController.update)
route.delete("/:id", characterController.delete)

export default route