import { Request, Response } from 'express';
import { db } from '../models/db';

export const getUsers = (_: Request, res: Response): void => {
  const q = 'SELECT * FROM usuarios';

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req: Request, res: Response): void => {
  const q =
    'INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)';

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  console.log(values)

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('Usuário criado com sucesso.');
  });

  console.log(values)
};

export const updateUser = (req: Request, res: Response): void => {
  const q =
    'UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?';

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('Usuário atualizado com sucesso.');
  });
};

export const deleteUser = (req: Request, res: Response): void => {
  const q = 'DELETE FROM usuarios WHERE `id` = ?';

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('Usuário deletado com sucesso.');
  });
};
