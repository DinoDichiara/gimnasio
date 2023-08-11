const jwt = require("jsonwebtoken");

const secret = "FuturoR6";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjbGllbnRlIiwiaWF0IjoxNjkwOTk2ODg1fQ.3r1dIoLhkTTsM8EsbnMv2c-mni_nIBH6vpiaQ8OM0OU";

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const playload = verifyToken(token, secret);
console.log(playload);
