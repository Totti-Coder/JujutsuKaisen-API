import cursesModel from "../models/curses.js";

class cursesController {
  constructor() {}

  async create(req, res) {
    try {
      const data = await cursesModel.create(req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async createMany(req, res) {
    try {
      const curses = req.body;

      if (!Array.isArray(curses)) {
        return res.status(400).json({
          error: "Body must be an array of curses",
        });
      }

      const result = await cursesModel.createMany(curses);
      res.status(201).json({
        message: "Curses created successfully",
        insertedCount: result.insertedCount,
        insertedIds: result.insertedIds,
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params; // Obtain ID
      const dataToUpdate = req.body; // Obtain all data
      const result = await cursesModel.update(id, dataToUpdate);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await cursesModel.delete(id);
      res.status(206).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async getAll(req, res) {
    try {
      const data = await cursesModel.getAll();
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const data = await cursesModel.getOne(id);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}
export default new cursesController();
