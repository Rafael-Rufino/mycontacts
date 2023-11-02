const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

client.connect();


exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
