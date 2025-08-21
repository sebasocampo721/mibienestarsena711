const { role } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const roles = await role.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const roleFound = await role.findByPk(req.params.id);
    if (!roleFound) return res.status(404).json({ message: 'Role not found' });
    res.json(roleFound);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRole = await role.create(req.body);
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await role.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedRole = await role.findByPk(req.params.id);
      return res.json(updatedRole);
    }
    throw new Error('Role not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await role.destroy({ where: { id: req.params.id } });
    if (deleted) return res.status(204).send();
    throw new Error('Role not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
