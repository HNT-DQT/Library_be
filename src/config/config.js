require('dotenv').config();

// export const BCRYPT_SALT = parseInt(process.env.BCRYPT_SALT || "") || 10;
// export const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const PORT = process.env.PORT ;
const DB_HOST = process.env.DB_HOST ;
const DB_PORT = process.env.DB_PORT ;
// export const DB_USER = process.env.DB_USER ;
// export const DB_PWD = process.env.DB_PWD ;
const DB_NAME = process.env.DB_NAME;

module.exports={PORT, DB_HOST, DB_PORT, DB_NAME};