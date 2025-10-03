const User = require('../models/userModel');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.getAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter usuarios' });
        }
    },
    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.getById(id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter usuario' });
        }
    },
    createUser: async (req, res) => {
        try {
            const { name, email } = req.body;
            const newUser = await User.create(name, email);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    },
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const updatedUser = await User.update(id, name, email);
            if (updatedUser) {
                res.json(updatedUser);
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const success = await User.delete(id);
            if (success) {
                res.json({ message: 'Usuario deletado com sucesso' });
            } else {
                res.status(404).json({ error: 'Usuario não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }
};

module.exports = userController;