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




app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});

