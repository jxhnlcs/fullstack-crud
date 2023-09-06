"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql_1 = __importDefault(require("mysql"));
exports.db = mysql_1.default.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "crud"
});
exports.db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar-se ao banco de dados:', err);
    }
    else {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    }
});
