const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const {DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PWD} = require('../config');

const db_url = `mongodb+srv://${DB_USER}:${DB_PWD}@cluster0.j0fbt91.mongodb.net/${DB_NAME}`;

// const db_uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// async function connect(){

//     try {
//         await mongoose.connect(db_uri);
//         console.log('Connect successfully!');
//     } catch (error) {
//         console.log('Connect failed!');
//     }

// }

async function connect(){

    try{
        const client = new MongoClient(db_url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        await client.connect();
        console.log('Connect successfully!');
    }catch(err){
        console.log('Connect failed!');
    }
    
}


module.exports = { connect };