const { Pool } = require('pg');

//
//const PG_URI = 'postgres://xvnihpao:dUcYIF00Vde5019JWoL5c8slXZO6luwT@ruby.db.elephantsql.com:5432/xvnihpao'; //OG
// const PG_URI = 'postgres://postgres:postgres@172.30.0.3:5432'; //Should work but it ain't
// const PG_URI = 'postgres://{172.30.0.3}:5432'; //password auth mstro
// const PG_URI = 'postgres://localhost:5432/postgres'; //password auth mstro
// const PG_URI = 'postgres://postgres:postgres@localhost:5432/postgres'; //WORKS!!!
const PG_URI = 'postgres://postgres:postgres@localhost:5432/dbb'; //WORKS!!!

//CREATE DATABASE dbb;
//CREATE TABLE student();

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
};