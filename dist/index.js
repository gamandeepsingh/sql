"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require('dotenv').config();
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const client = new pg_1.Client({
    connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${5432}/${PGDATABASE}`,
    ssl: { rejectUnauthorized: false }
});
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        // const result = await client.query(`
        // CREATE TABLE users (
        //     id SERIAL PRIMARY KEY,
        //     username VARCHAR(50) UNIQUE NOT NULL,
        //     email VARCHAR(255) UNIQUE NOT NULL,
        //     password VARCHAR(255) NOT NULL,
        //     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        // );
        // `)
        const insertText = 'INSERT INTO users (username, email, password) VALUES ("gaman", "gaman@gmail.com", "1234567890")';
        const res = yield client.query(insertText);
        console.log(res);
        // console.log(result);
    });
}
createTable();
