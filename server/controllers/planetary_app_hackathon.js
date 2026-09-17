const PlanetaryAppHackathon = require("../models/PlanetaryAppHackathon");

async function index(req, res) {
  const rows = await PlanetaryAppHackathon.findAll();
  res.json(rows);
}

module.exports = { index };
