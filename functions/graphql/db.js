require("dotenv").config();
const faunadb = require("faunadb");

const query = faunadb.query;

function createClient() {
  if (!process.env.FAUNA_SERVER_SECRET) {
    throw new Error("No secret in environment, skipping client creation");
  }
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SERVER_SECRET
  });

  return client;
}

exports.client = createClient();
exports.query = query;
