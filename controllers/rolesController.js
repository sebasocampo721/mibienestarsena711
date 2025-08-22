const { Role } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const roleFound = await Role.findByPk(req.params.id);
    if (!roleFound) return res.status(404).json({ message: 'Role not found' });
    res.json(roleFound);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRole = await Role.create(req.body);
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Role.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedRole = await Role.findByPk(req.params.id);
      return res.json(updatedRole);
    }
    throw new Error('Role not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Role.destroy({ where: { id: req.params.id } });
    if (deleted) return res.status(204).send();
    throw new Error('Role not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
