const { Category } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getOne(req, res) {
    try {
      const oneCategory = await Category.findByPk(req.params.id);
      if (!oneCategory) return res.status(404).json({ error: "Category not found" });
      res.json(oneCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const newCategory = await Category.create(req.body);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Category.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: "Category not found" });
      const updatedCategory = await Category.findByPk(req.params.id);
      res.json(updatedCategory);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Category.destroy({ where: { id: req.params.id } });
      if (!deleted) return res.status(404).json({ error: "Category not found" });
      res.json({ message: "Category deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
