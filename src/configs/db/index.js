const mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const {DB_NAME, DB_USER, DB_PWD} = require('../config');

const db_uri = `mongodb+srv://${DB_USER}:${DB_PWD}@cluster0.j0fbt91.mongodb.net/${DB_NAME}`;

async function connect(){

    try{
        // const client = new MongoClient(db_uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        // await client.connect();
        await mongoose.connect(db_uri);
        console.log('Connect successfully!');
    }catch(err){
        console.log(`Connect failed!. Error: ${err}`);
    }

}

module.exports = { connect };