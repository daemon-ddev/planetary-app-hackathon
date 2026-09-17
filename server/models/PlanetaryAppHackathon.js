const db = require("../db/connect");

class PlanetaryAppHackathon {
  static async findAll() {
    const result = await db.query("SELECT * FROM planetary_app_hackathon");
    return result.rows;
  }
}

module.exports = PlanetaryAppHackathon;
