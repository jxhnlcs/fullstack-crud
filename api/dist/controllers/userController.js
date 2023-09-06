"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUsers = void 0;
const db_1 = require("../models/db");
const getUsers = (_, res) => {
    const q = 'SELECT * FROM usuarios';
    db_1.db.query(q, (err, data) => {
        if (err)
            return res.json(err);
        return res.status(200).json(data);
    });
};
exports.getUsers = getUsers;
const addUser = (req, res) => {
    const q = 'INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)';
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];
    // console.log(values)
    db_1.db.query(q, [values], (err) => {
        if (err)
            return res.json(err);
        return res.status(200).json('Usuário criado com sucesso.');
    });
};
exports.addUser = addUser;
const updateUser = (req, res) => {
    const q = 'UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?';
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];
    db_1.db.query(q, [...values, req.params.id], (err) => {
        if (err)
            return res.json(err);
        return res.status(200).json('Usuário atualizado com sucesso.');
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const q = 'DELETE FROM usuarios WHERE `id` = ?';
    db_1.db.query(q, [req.params.id], (err) => {
        if (err)
            return res.json(err);
        return res.status(200).json('Usuário deletado com sucesso.');
    });
};
exports.deleteUser = deleteUser;
