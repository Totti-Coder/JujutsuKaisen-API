import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class cursesModel {
  // HELPER FUNCTION
  getCollection() {
    const db = dbClient.client.db("JujutsuCharacters");
    return db.collection("Curses");
  }

  // HELPER FUNCTION
  parseId(id) {
    if (!isNaN(id)) {
      return parseInt(id);
    }
    return new ObjectId(id);
  }

  // CREATE
  async create(curse) {
    try {
      const colCurses = this.getCollection();
      const result = await colCurses.insertOne(curse);
      return result;
    } catch (error) {
      console.error("Error adding a new curse:", error);
      throw error;
    }
  }

  // CREATE MANY
  async createMany(curses) {
    try {
      const colCurses = this.getCollection();
      const result = await colCurses.insertMany(curses);
      return result;
    } catch (error) {
      console.error("Error adding multiple curses:", error);
      throw error;
    }
  }

  //READ (OBTAIN ALL)
  async getAll() {
    try {
      const colCurses = this.getCollection();
      const curses = await colCurses.find({}).toArray();
      return curses;
    } catch (error) {
      console.error("Error fetching all curses:", error);
      throw error;
    }
  }

  // READ (OBTAIN ONE)
  async getOne(id) {
    try {
      const colCurses = this.getCollection();
      const curse = await colCurses.findOne({
        _id: this.parseId(id),
      });

      return curse;
    } catch (error) {
      console.error("Error fetching a curse:", error);
      throw error;
    }
  }

  // UPDATE
  async update(id, data) {
    try {
      const colCurses = this.getCollection();
      const result = await colCurses.updateOne(
        { _id: this.parseId(id) }, // Filter: searches for ID
        { $set: data } // Data: update the new values
      );
      return result;
    } catch (error) {
      console.error("Error updating a curse:", error);
      throw error;
    }
  }

  // DELETE
  async delete(id) {
    try {
      const colCurses = this.getCollection();
      const result = await colCurses.deleteOne({
        _id: this.parseId(id),
      });

      return result;
    } catch (error) {
      console.error("Error deleting a curse:", error);
      throw error;
    }
  }
}
export default new cursesModel();
