const { category } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const categories = await category.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getOne(req, res) {
    try {
      const oneCategory = await category.findByPk(req.params.id);
      if (!oneCategory) return res.status(404).json({ error: "Category not found" });
      res.json(oneCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const newCategory = await category.create(req.body);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await category.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: "Category not found" });
      const updatedCategory = await category.findByPk(req.params.id);
      res.json(updatedCategory);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await category.destroy({ where: { id: req.params.id } });
      if (!deleted) return res.status(404).json({ error: "Category not found" });
      res.json({ message: "Category deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
