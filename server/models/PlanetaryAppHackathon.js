const db = require("../db/connect");

class PlanetaryAppHackathon {
  static async findAll() {
    const result = await db.query("SELECT * FROM planetary_app_hackathon ORDER BY id");
    return result.rows;
  }

  static async findById(id) {
    const result = await db.query("SELECT * FROM planetary_app_hackathon WHERE id = $1", [id]);
    return result.rows[0];
  }
}

module.exports = PlanetaryAppHackathon;