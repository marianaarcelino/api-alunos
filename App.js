const express = require("express");
const app = express();

const routerAluno = require("./routers/AlunoRouter");

app.use("/api/alunos", routerAluno);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});