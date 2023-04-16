const alunos = [
    { nome: "Caique", matricula: "1", media: "8" },
    { nome: "Danilo", matricula: "2", media: "9" },
    { nome: "Nai", matricula: "3", media: "9" },
    { nome: "Raíssa", matricula: "4", media: "8" },
    { nome: "Nicolas", matricula: "5", media: "8" },
];


function Adicionar (req, res){
    const { nome, media, matricula } = req.query;
    const novoAluno = { nome: nome, media: media, matricula: matricula };
    if (nome !== undefined && media !== undefined && matricula !== undefined) {
        alunos.push(novoAluno)
        res.send(`Aluno adicionado com sucesso !`);
    } else {
        res.status(400).send("Não foi possível adicionar o aluno.");
    }
}

function Deletar (req, res) {
    const { index } = req.params
    if (index <= alunos.length - 1) {
        alunos.splice(index, 1);
        res.send(alunos)
    } else {
        res.status(404).send("O Aluno não pode ser encontrado.")
    }
}

function Atualizar (req,res) {
    const {index} = req.params;
    const{nome, media} = req.query;
    alunos[index].nome= nome;
    alunos[index].media = media;
    res.json(alunos);
}

module.exports = {alunos, Adicionar, Deletar, Atualizar};