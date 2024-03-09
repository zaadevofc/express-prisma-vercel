const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();

const prisma = new PrismaClient()

app.get("/", (req, res) => {
  res.send({
    ok: true,
    "Hello World": "message",
  });
});

app.get("/users", async (req, res) => {
  const db = 
  await prisma.user.findMany({});
  res.send({ users: db });
});

app.post("/add", async (req, res) => {
  const db = 
  await prisma.user.create({
    data: {
      name: req.query.name,
      email: req.query.email,
      password: req.query.password,
    },
  });
  if (db) return res.send({ ok: true });
  return res.send({ ok: false });
});

app.listen(4545, () => {
  console.log("Server berjalan di http://localhost:4545");
});
