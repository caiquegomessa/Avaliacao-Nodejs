const express = require("express");
const app = express();
const alunos = require("./alunos")


app.get("/alunos", (req, res) => {
    const consultar = req.query;
    const resConsultar = alunos.filter(aluno => {
        let procurar = true;
        for (key in consultar) {
            procurar = procurar && aluno[key] === consultar[key];
        }
        return procurar
    });
    res.json(resConsultar);
});

app.post("/alunos/novo", (req, res) => {
    const { nome, media, matricula } = req.query;
    const novoAluno = { nome: nome, media: media, matricula: matricula};
    if (nome !== undefined && media !== undefined && matricula !== undefined) {
        alunos.push(novoAluno)
        res.send(`Aluno adicionado com sucesso !`);
      } else {
        res.status(400).send("Não foi possível adicionar o aluno.");
      }
  });




app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});

