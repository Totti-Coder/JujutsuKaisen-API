import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class charactersModel {
  // HELPER FUNCTION
  getCollection() {
    const db = dbClient.client.db("JujutsuCharacters");
    return db.collection("Sorcerers");
  }

  // HELPER FUNCTION
  parseId(id) {
    try {
      const numId = Number(id);
      if (Number.isInteger(numId)) {
        return numId;
      }
      return new ObjectId(id);
    } catch (error) {
      return id;
    }
  }

  // CREATE
  async create(sorcerer) {
    try {
      const colSorcerers = this.getCollection();
      const result = await colSorcerers.insertOne(sorcerer);
      return result;
    } catch (error) {
      console.error("Error adding a new sorcerer:", error);
      throw error;
    }
  }

  // CREATE MANY
  async createMany(sorcerers) {
    try {
      const colSorcerers = this.getCollection();
      const result = await colSorcerers.insertMany(sorcerers);
      return result;
    } catch (error) {
      console.error("Error adding multiple sorcerers:", error);
      throw error;
    }
  }

  //READ (OBTAIN ALL)
  async getAll() {
    try {
      const colSorcerers = this.getCollection();
      const sorcerers = await colSorcerers.find({}).toArray();
      return sorcerers;
    } catch (error) {
      console.error("Error fetching all sorcerers:", error);
      throw error;
    }
  }

  // READ (OBTAIN ONE)
  async getOne(id) {
    try {
      const colSorcerers = this.getCollection();
      const sorcerer = await colSorcerers.findOne({
        _id: this.parseId(id),
      });

      return sorcerer;
    } catch (error) {
      console.error("Error fetching a sorcerer:", error);
      throw error;
    }
  }

  // UPDATE
  async update(id, data) {
    try {
      const colSorcerers = this.getCollection();
      const result = await colSorcerers.updateOne(
        { _id: this.parseId(id) }, // Filter: searches for ID
        { $set: data } // Data: update the new values
      );
      return result;
    } catch (error) {
      console.error("Error updating a sorcerer:", error);
      throw error;
    }
  }

  // DELETE
  async delete(id) {
    try {
      const colSorcerers = this.getCollection();
      const result = await colSorcerers.deleteOne({
        _id: this.parseId(id),
      });

      return result;
    } catch (error) {
      console.error("Error deleting a sorcerer:", error);
      throw error;
    }
  }
}
export default new charactersModel();
