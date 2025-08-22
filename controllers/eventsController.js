const { event, category, user } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const events = await event.findAll({
        include: [
          { model: category, attributes: ["id", "name"] },
          { model: user, attributes: ["id", "name", "email"] }
        ],
      });
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getOne(req, res) {
    try {
      const oneEvent = await event.findByPk(req.params.id, {
        include: [
          { model: category, attributes: ["id", "name"] },
          { model: user, attributes: ["id", "name", "email"] }
        ],
      });
      if (!oneEvent) return res.status(404).json({ error: "Event not found" });
      res.json(oneEvent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const newEvent = await event.create(req.body);
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await event.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: "Event not found" });
      const updatedEvent = await event.findByPk(req.params.id);
      res.json(updatedEvent);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await event.destroy({ where: { id: req.params.id } });
      if (!deleted) return res.status(404).json({ error: "Event not found" });
      res.json({ message: "Event deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
