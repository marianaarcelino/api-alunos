const AlunoRepository = require('../repositories/AlunoRepository');

class AlunoService {
    constructor() {
        this.alunoRepository = new AlunoRepository();
    }

    listarAlunos() {
        return this.alunoRepository.listarAlunos();
    }
}

module.exports = AlunoService;