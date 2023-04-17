const express = require("express");
const app = express();
const alunos = require("./alunos");



app.get("/alunos", (req, res) => {
    const consultar = req.query;
    const resConsultar = alunos.alunos.filter(aluno => {
        let procurar = true;
        for (key in consultar) {
            procurar = procurar && aluno[key] === consultar[key];
        }
        return procurar
    });
    res.json(resConsultar);
});

app.post("/alunos/novo", (req, res) => {
    alunos.Adicionar(req, res);
});

app.delete("/alunos/deletar/:index", (req, res) => {
    alunos.Deletar(req, res);
});

app.put("/alunos/atualizar/:index", (req, res)=> {
    alunos.Atualizar(req, res);
});



app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});

