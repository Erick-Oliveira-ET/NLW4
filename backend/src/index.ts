import express from "express";
const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.listen(3333, () => console.log("Servidor rodando."));
