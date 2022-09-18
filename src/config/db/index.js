const mongoose = require('mongoose');
const {DB_HOST, DB_PORT, DB_NAME} = require('../config');

const db_uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

async function connect(){

    try {
        await mongoose.connect(db_uri);
        console.log('Connect successfully!');
    } catch (error) {
        console.log('Connect failed!');
    }
    

}

module.exports = { connect };