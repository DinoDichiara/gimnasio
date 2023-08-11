const { Client } = require("pg");

async function getConnection() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "dino",
    password: "admin123",
    database: "gimnasio",
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
