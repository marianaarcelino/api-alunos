const AlunoModel = require('../models/AlunoModel');

class AlunoRepository {
    constructor() {
        this.alunos = [];

        this.adicionarAluno('123065', 'Maria', 'maria.jpg');
        this.adicionarAluno('456098', 'João', 'joao.jpg');
        this.adicionarAluno('789012', 'Ana', 'ana.jpg');
    }

    adicionarAluno(matricula, nome, imagem) {
        const aluno = new AlunoModel(matricula, nome, imagem);
        this.alunos.push(aluno);
    }

    listarAlunos() {
        return this.alunos;
    }
}

module.exports = AlunoRepository;